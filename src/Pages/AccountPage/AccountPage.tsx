import { RouteComponentProps } from 'react-router-dom'
import ApiRequestComponent, {
  PlainErrorComponent,
  PlainLoadingComponent,
} from '../../ApiRequestComponent'
import {
  getAccountModules,
  getAccountResources,
} from '../../api_clients/BlockchainRestClient'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import {
  transactionsBySenderAddressQuery,
  TransactionsQueryType,
} from '../../api_clients/AnalyticsQueries'
import { DataOrErrors } from '../../api_clients/FetchTypes'
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
  resourcesResponse?: Promise<DataOrErrors<Resource[]>>
  modulesResponse?: Promise<DataOrErrors<Module[]>>
  recentTransactionsResponse?: Promise<DataOrErrors<TransactionRow[]>>
}

export default function AccountPage(props: AccountPageProps) {
  const maybeAddress = getCanonicalAddress(props.match.params.address)
  if (maybeAddress.err) {
    throw new Error(`Invalid address: "${maybeAddress.val}"`)
  }
  const address = maybeAddress.val

  const [
    { resourcesResponse, modulesResponse, recentTransactionsResponse },
    setState,
  ] = useState<AccountPageState>({})
  useEffect(() => {
    setState({
      resourcesResponse: getAccountResources(address),
      modulesResponse: getAccountModules(address),
      recentTransactionsResponse:
        postQueryToAnalyticsApi<TransactionsQueryType>(
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
        }),
    })
  }, [])
  if (!resourcesResponse || !modulesResponse || !recentTransactionsResponse) {
    return <></>
  }

  const accountResourceResponse: Promise<
    DataOrErrors<DiemAccountResource | null>
  > = resourcesResponse.then((resourcesOrError) => {
    if ('data' in resourcesOrError) {
      return {
        data:
          (resourcesOrError.data.find(
            isDiemAccountResource
          ) as DiemAccountResource) || null,
      }
    } else {
      return resourcesOrError
    }
  })
  // TODO: Convince the BlockchainRestClient to propogate up the information that the request failed because 404
  // TODO: Until we have that we cannot know whether to fwd to 404, or say try again later
  console.log(resourcesResponse, modulesResponse, recentTransactionsResponse)
  return (
    <MainWrapper>
      <>
        <h1>Account Details</h1>
        <ApiRequestComponent
          request={() => resourcesResponse}
          errorComponent={<PlainErrorComponent />}
          loadingComponent={<PlainLoadingComponent />}
        >
          <Balances data={[]} />
        </ApiRequestComponent>

        <h2>Recent Transactions</h2>
        <ApiRequestComponent
          request={() => recentTransactionsResponse}
          errorComponent={<PlainErrorComponent />}
          loadingComponent={<PlainLoadingComponent />}
        >
          <RecentTransactionsTable data={[]} />
        </ApiRequestComponent>

        <ApiRequestComponent
          request={() => modulesResponse}
          errorComponent={<PlainErrorComponent />}
          loadingComponent={<PlainLoadingComponent />}
        >
          <SmartContractMethods data={[]} />
        </ApiRequestComponent>
        <ApiRequestComponent
          request={() => modulesResponse}
          errorComponent={<PlainErrorComponent />}
          loadingComponent={<PlainLoadingComponent />}
        >
          <SmartContractStructs data={[]} />
        </ApiRequestComponent>

        <ApiRequestComponent
          request={() => accountResourceResponse}
          errorComponent={<PlainErrorComponent />}
          loadingComponent={<PlainLoadingComponent />}
        >
          <SequenceNumber data={null} />
        </ApiRequestComponent>

        <ApiRequestComponent
          request={() => accountResourceResponse}
          errorComponent={<PlainErrorComponent />}
          loadingComponent={<PlainLoadingComponent />}
        >
          <AuthenticationKey data={null} />
        </ApiRequestComponent>

        <ApiRequestComponent
          request={() => accountResourceResponse}
          errorComponent={<PlainErrorComponent />}
          loadingComponent={<PlainLoadingComponent />}
        >
          <EventHandlesTable data={null} />
        </ApiRequestComponent>

        <h2>Raw Resources</h2>
        <ApiRequestComponent
          request={() => resourcesResponse}
          errorComponent={<PlainErrorComponent />}
          loadingComponent={<PlainLoadingComponent />}
        >
          <JSONPretty data={[]} id='rawResources' />
        </ApiRequestComponent>

        <h2>Raw Smart Contracts</h2>
        <ApiRequestComponent
          request={() => modulesResponse}
          errorComponent={<PlainErrorComponent />}
          loadingComponent={<PlainLoadingComponent />}
        >
          <JSONPretty data={[]} id='rawModules' />
        </ApiRequestComponent>
      </>
    </MainWrapper>
  )
}
