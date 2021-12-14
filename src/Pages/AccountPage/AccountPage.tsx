import { RouteComponentProps } from 'react-router-dom'
import {
  getAccountModules,
  getAccountResources,
} from '../../api_clients/BlockchainRestClient'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import {
  transactionsBySenderAddressQuery,
  TransactionsQueryType,
} from '../../api_clients/AnalyticsQueries'
import {
  DataOrErrors,
  isNotFound as isNotFoundDataOrErrors,
} from '../../api_clients/FetchTypes'
import { TransactionVersion } from '../../TableComponents/Link'
import Table, { column } from '../../Table'
import MainWrapper from '../../MainWrapper'
import JSONPretty from 'react-json-pretty'
import React, { useEffect, useState } from 'react'
import Balances from './Balances'
import SmartContractMethods from './SmartContractMethods'
import SmartContractStructs from './SmartContractStructs'
import { Card } from 'react-bootstrap'
import {
  DiemAccountResource,
  isDiemAccountResource,
  Module,
  Resource,
} from '../../api_clients/BlockchainRestTypes'
import {
  TransactionRow,
  transformAnalyticsTransactionIntoTransaction,
} from '../Common/TransactionModel'
import { getCanonicalAddress } from '../../utils'
import Loadable, { LoadingState } from '../../Loadable'

const RecentTransactionsTable: React.FC<{ data: TransactionRow[] }> = ({
  data,
}) => {
  return (
    <Table
      columns={[
        column('Version', 'version', TransactionVersion),
        column('Timestamp', 'commitTimestamp'),
        column('Type', 'txnType'),
        column('Status', 'status'),
      ]}
      data={data}
      id='recentTransactions'
    />
  )
}

const EventHandlesTable: React.FC<{
  data: DiemAccountResource | null
}> = ({ data }) => {
  if (!data) {
    return <></>
  }
  const eventHandleData = [
    {
      key: 'received_events',
      ...data.value.received_events,
    },
    {
      key: 'sent_events',
      ...data.value.sent_events,
    },
  ]
  return (
    <Card data-testid='event-handles-card'>
      <Card.Header className='Header'>Event Handles</Card.Header>
      <Card.Body>
        <Table
          columns={[
            column('Event Handle', 'key'),
            column('Counter', 'counter'),
            column('GUID', 'guid'),
          ]}
          data={eventHandleData}
        />
      </Card.Body>
    </Card>
  )
}

function SequenceNumber({ data }: { data: DiemAccountResource | null }) {
  if (!data) {
    return <></>
  }
  return (
    <Card className='mb-5'>
      <Card.Header>Sequence Number</Card.Header>
      <Card.Body id='sequenceNumber'>{data.value.sequence_number}</Card.Body>
    </Card>
  )
}

function AuthenticationKey({ data }: { data: DiemAccountResource | null }) {
  if (!data) {
    return <></>
  }
  return (
    <Card className='mb-5'>
      <Card.Header>Authentication Key</Card.Header>
      <Card.Body id='authenticationKey'>
        {data.value.authentication_key}
      </Card.Body>
    </Card>
  )
}

interface AccountPageMatch {
  address: string
}

type AccountPageProps = RouteComponentProps<AccountPageMatch>

interface AccountPageState {
  resourcesResponse: LoadingState<Resource[]>
  modulesResponse: LoadingState<Module[]>
  recentTransactionsResponse: LoadingState<TransactionRow[]>
  accountResourceResponse: LoadingState<DiemAccountResource | null>
}

const getRecentTransactions = (
  address: string
): Promise<DataOrErrors<TransactionRow[]>> => {
  return postQueryToAnalyticsApi<TransactionsQueryType>(
    transactionsBySenderAddressQuery(address),
    'transactions'
  ).then((analyticsTransactionsOrError) => {
    if ('data' in analyticsTransactionsOrError) {
      return {
        data: analyticsTransactionsOrError.data.map(
          transformAnalyticsTransactionIntoTransaction
        ),
      }
    } else {
      return analyticsTransactionsOrError
    }
  })
}

const getAccountResourceResponse = (
  result: DataOrErrors<Resource[]>
): LoadingState<DiemAccountResource | null> => {
  if ('errors' in result) return result
  const data =
    (result.data.find(isDiemAccountResource) as DiemAccountResource) || null
  return { data: data }
}

function isNotFound<T>(loadingState: LoadingState<T> | undefined): boolean {
  if (!loadingState) return false
  if ('isLoading' in loadingState) return false
  return isNotFoundDataOrErrors(loadingState)
}

export default function AccountPage(props: AccountPageProps) {
  const maybeAddress = getCanonicalAddress(props.match.params.address)
  if (maybeAddress.err) {
    props.history.push('/address/not-found')
    return null
  }
  const address = maybeAddress.val

  const [
    {
      resourcesResponse,
      modulesResponse,
      recentTransactionsResponse,
      accountResourceResponse,
    },
    setState,
  ] = useState<AccountPageState>({
    resourcesResponse: { isLoading: true },
    modulesResponse: { isLoading: true },
    recentTransactionsResponse: { isLoading: true },
    accountResourceResponse: { isLoading: true },
  })

  useEffect(() => {
    getAccountResources(address).then((result) =>
      setState((oldState) => ({
        ...oldState,
        resourcesResponse: result,
        accountResourceResponse: getAccountResourceResponse(result),
      }))
    )

    getRecentTransactions(address).then((result) =>
      setState((oldState) => ({
        ...oldState,
        recentTransactionsResponse: result,
      }))
    )

    getAccountModules(address).then((result) =>
      setState((oldState) => ({
        ...oldState,
        modulesResponse: result,
      }))
    )
  }, [])

  if (
    isNotFound<Resource[]>(resourcesResponse) ||
    isNotFound<Module[]>(modulesResponse) ||
    isNotFound<TransactionRow[]>(recentTransactionsResponse)
  ) {
    props.history.push('/address/not-found')
    return null
  }

  return (
    <MainWrapper>
      <>
        <h1>Account Details</h1>
        <Loadable state={resourcesResponse}>
          <Balances data={[]} />
        </Loadable>

        <h2>Recent Transactions</h2>
        <Loadable state={recentTransactionsResponse}>
          <RecentTransactionsTable data={[]} />
        </Loadable>

        <Loadable state={modulesResponse}>
          <SmartContractMethods data={[]} />
        </Loadable>
        <Loadable state={modulesResponse}>
          <SmartContractStructs data={[]} />
        </Loadable>
        <Loadable state={accountResourceResponse}>
          <SequenceNumber data={null} />
        </Loadable>
        <Loadable state={accountResourceResponse}>
          <AuthenticationKey data={null} />
        </Loadable>
        <Loadable state={accountResourceResponse}>
          <EventHandlesTable data={null} />
        </Loadable>

        <h2>Raw Resources</h2>
        <Loadable state={resourcesResponse}>
          <JSONPretty data={resourcesResponse} id='rawResources' />
        </Loadable>

        <h2>Raw Smart Contracts</h2>
        <Loadable state={modulesResponse}>
          <JSONPretty data={modulesResponse} id='rawModules' />
        </Loadable>
      </>
    </MainWrapper>
  )
}
