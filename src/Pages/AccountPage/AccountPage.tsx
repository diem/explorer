import { RouteComponentProps } from 'react-router-dom'
import ApiRequestComponent from '../../ApiRequestComponent'
import { getAccountModules, getAccountResources } from '../../api_clients/BlockchainRestClient'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import {
  transactionsBySenderAddressQuery,
  transactionsQueryType
} from '../../api_clients/AnalyticsQueries'
import { DataOrErrors } from '../../api_clients/FetchTypes'
import { TransactionVersion } from '../../TableComponents/Link'
import Table from '../../Table'
import MainWrapper from '../../MainWrapper'
import JSONPretty from 'react-json-pretty'
import React from 'react'
import Balances from './Balances'
import SmartContractMethods from './SmartContractMethods'
import SmartContractStructs from './SmartContractStructs'
import { Alert, Card } from 'react-bootstrap'
import {
  DiemAccountResource,
  isBalanceResource,
  isDiemAccountResource,
  Module,
  Resource,
} from '../../api_clients/BlockchainRestTypes'
import {
  TransactionRow,
  transformAnalyticsTransactionIntoTransaction
} from '../Common/TransactionModel'

interface AccountPageWithResponseProps {
  resources: Resource[]
  modules: Module[]
  transactions: TransactionRow[]
}

function accountIsSupported(data: AccountPageWithResponseProps) {
  const hasStructs = data.modules.length > 0 && data.modules[0].abi?.structs.length > 0
  const hasMethods = data.modules.length > 0 && data.modules[0].abi?.exposed_functions.length > 0
  const hasBalance = data.resources.some(isBalanceResource)

  return hasStructs || hasMethods || hasBalance
}

function UnsupportedAccountCard() {
  return (
    <Alert variant={'warning'} style={{ width: '30rem' }}>
      <h4>Unsupported Account</h4>
      <p>
        Diem Explorer is still being built and does not support this type of
        account yet.
      </p>
      <p>
        In the mean time the raw data is displayed here for your convenience
      </p>
    </Alert>
  )
}

const RecentTransactionsTable: React.FC<{ transactions: TransactionRow[] }> = ({ transactions }) => {
  const columns = [
    {
      Header: 'Version',
      accessor: 'version',
      Cell: TransactionVersion
    },
    {
      Header: 'Timestamp',
      accessor: 'commitTimestamp'
    },
    {
      Header: 'Type',
      accessor: 'txnType'
    },
    {
      Header: 'Status',
      accessor: 'status'
    },
  ]

  return <Table columns={columns} data={transactions} id="recentTransactions"/>
}

function AccountPageWithResponse({
  data,
}: {
  data: AccountPageWithResponseProps
}) {
  return (
    <MainWrapper>
      <>
        <h1>Account Details</h1>
        {!accountIsSupported(data) && <UnsupportedAccountCard/>}
        <Balances resources={data.resources}/>

        <h2>Recent Transactions</h2>
        <RecentTransactionsTable transactions={data.transactions}/>

        <SmartContractMethods modules={data.modules}/>
        <SmartContractStructs modules={data.modules}/>

        <Card className="mb-5">
          <Card.Header>Sequence Number</Card.Header>
          <Card.Body id="sequenceNumber">
            {(data.resources.find(isDiemAccountResource) as DiemAccountResource)?.value.sequence_number}
          </Card.Body>
        </Card>

        <Card className="mb-5">
          <Card.Header>Authentication Key</Card.Header>
          <Card.Body id="authenticationKey">
            {(data.resources.find(isDiemAccountResource) as DiemAccountResource)?.value.authentication_key}
          </Card.Body>
        </Card>

        <h2>Raw Resources</h2>
        <JSONPretty data={data.resources} id="rawResources"/>

        <h2>Raw Smart Contracts</h2>
        <JSONPretty data={data.modules} id="rawModules"/>
      </>
    </MainWrapper>
  )
}

async function getAccountData(
  address: string,
): Promise<DataOrErrors<AccountPageWithResponseProps>> {
  const resourcesResponse = await getAccountResources(address)
  const modulesResponse = await getAccountModules(address)
  const recentTransactions = await postQueryToAnalyticsApi<transactionsQueryType>(transactionsBySenderAddressQuery(address), 'transactions')

  if ('errors' in resourcesResponse || 'errors' in modulesResponse || 'errors' in recentTransactions) {
    const allErrors = []
      // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
      .concat(resourcesResponse.errors)
      // @ts-ignore 👆
      .concat(modulesResponse.errors)
      // @ts-ignore 👆
      .concat(recentTransactions.errors)
      .filter((error) => error !== null)
    return {
      errors: allErrors,
    }
  } else {
    return {
      data: {
        resources: resourcesResponse.data,
        modules: modulesResponse.data,
        transactions: recentTransactions.data.map(transformAnalyticsTransactionIntoTransaction)
      },
    }
  }
}

interface AccountPageMatch {
  address: string
}

interface AccountPageProps extends RouteComponentProps<AccountPageMatch> {}

export default function AccountPage(props: AccountPageProps) {
  const nullData = {
    resources: [],
    modules: [],
    transactions: []
  }

  return (
    <ApiRequestComponent
      request={getAccountData}
      args={[props.match.params.address.toUpperCase()]}
    >
      <AccountPageWithResponse data={nullData}/>
    </ApiRequestComponent>
  )
}
