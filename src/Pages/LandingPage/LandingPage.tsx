import { Card, FormControl, InputGroup } from 'react-bootstrap'
import React, { ReactNode } from 'react'
import ApiRequestPage from '../../ApiRequestPage'
import MainWrapper from '../../MainWrapper'
import { LandingPageTransaction, transformAnalyticsTransactionIntoTransaction } from './LandingPageTransactionModel'
import Table from '../../Table'
import { useHistory } from 'react-router-dom'
import './LandingPage.css'
import { TransactionVersion } from '../../TableComponents/Link'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import { DataOrErrors } from '../../api_clients/FetchTypes'
import {
  countTransactionsInLast10Minutes, countTransactionsInLast10MinutesType,
  landingPageQuery,
  landingPageQueryType
} from '../../api_clients/AnalyticsQueries'

function Wrapper(props: { children: ReactNode }) {
  return (
    <MainWrapper>
      <>
        <h2 className="mb-5" role="note">
          Welcome To Diem Explorer
        </h2>
        <h3 className="mb-2">Recent Transactions</h3>
        {props.children}
      </>
    </MainWrapper>
  )
}

function AverageTransactionsPerSecondCard({ averageTps }: { averageTps: number}) {
  return (
    <Card className='mb-5'>
      <Card.Header>Current Statistics</Card.Header>
      <Card.Body>
        <dl className='mb-0'>
          <div id='averageTransactionsPerSecond'>
            <dt><abbr title='Transactions Per Second'>TPS</abbr></dt>
            <dd className='mb-0'>{new Intl.NumberFormat().format(averageTps)}</dd>
          </div>
        </dl>
      </Card.Body>
    </Card>
  )
}

function TransactionTable(props: { transactions: LandingPageTransaction[] }) {
  const columns = [
    { Header: 'Version', accessor: 'version', Cell: TransactionVersion },
    { Header: 'Timestamp', accessor: 'commitTimestamp' },
    { Header: 'Type', accessor: 'txnType' },
    { Header: 'Status', accessor: 'status' },
  ]

  return <Table columns={columns} data={props.transactions} id='landingPageTransactions'/>
}
type LandingPageWithResponseProps = {
  data: {
    recentTransactions: LandingPageTransaction[],
    averageTps: number
  }
}

function LandingPageWithResponse(props: LandingPageWithResponseProps) {
  const history = useHistory()
  function handleSearch(event: any) {
    // Enter Key
    if (event.key === 'Enter') {
      const value = event.target.value.trim().toLowerCase().replace(/^(0x)/, '')
      if (/^\d+$/.test(value)) {
        // Its a txn version
        history.push(`/txn/${value}`)
      } else {
        // Its an address
        history.push(`/address/${value}`)
      }
    }
  }

  return (
    <Wrapper>
      <InputGroup className="mb-5">
        <FormControl
          placeholder="Search by Address / Txn Version"
          aria-label="Search by Address / Txn Version"
          onKeyPress={handleSearch}
        />
      </InputGroup>
      <AverageTransactionsPerSecondCard averageTps={props.data.averageTps} />
      <TransactionTable transactions={props.data.recentTransactions} />
    </Wrapper>
  )
}

function transformAnalyticsTransactionsOrErrors(
  response: DataOrErrors<landingPageQueryType>
): DataOrErrors<LandingPageTransaction[]> {
  if (response.data) {
    return {
      errors: null,
      data: response.data.map(transformAnalyticsTransactionIntoTransaction),
    }
  } else {
    return {
      errors: response.errors,
      data: null,
    }
  }
}

export default function LandingPage() {
  const nullData = {
    recentTransactions: [],
    averageTps: NaN
  }
  return (
    <ApiRequestPage
      request={async () => {
        const txnsInLast10m = await postQueryToAnalyticsApi<countTransactionsInLast10MinutesType>(countTransactionsInLast10Minutes(), 'transactions_aggregate')
        const recentTxns = await postQueryToAnalyticsApi<landingPageQueryType>(landingPageQuery(), 'transactions').then(transformAnalyticsTransactionsOrErrors)

        if (txnsInLast10m.errors || recentTxns.errors) {
          return {
            // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
            data: null, errors: [].concat(txnsInLast10m.errors).concat(recentTxns.errors).filter((error) => error !== null)
          }
        } else {
          return {
            data: {
              recentTransactions: recentTxns.data,
              averageTps: txnsInLast10m.data!.aggregate.count / 600
            },
            errors: null
          }
        }
      }}
    >
      <LandingPageWithResponse data={nullData} />
    </ApiRequestPage>
  )
}
