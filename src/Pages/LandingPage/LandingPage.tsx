import { Card, FormControl, InputGroup } from 'react-bootstrap'
import React, { ReactNode } from 'react'
import ApiRequestPage from '../../ApiRequestPage'
import MainWrapper from '../../MainWrapper'
import {
  TransactionRow,
  transformAnalyticsTransactionIntoTransaction
} from '../Common/TransactionModel'
import Table from '../../Table'
import { useHistory } from 'react-router-dom'
import './LandingPage.css'
import { TransactionVersion } from '../../TableComponents/Link'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import { DataOrErrors } from '../../api_clients/FetchTypes'
import {
  countTransactionsInLast10Minutes,
  countTransactionsInLast10MinutesType,
  LatestMintBurnNetQuery,
  transactionsQuery,
  transactionsQueryType
} from '../../api_clients/AnalyticsQueries'
import ReactTooltip from 'react-tooltip'
import { GraphQLTypes } from '../../../utils/Analytics_Hasura_Api_Zeus_Client/zeus'

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

type CurrentStatisticsCardProps = { averageTps: number, totalMintValue: number, totalBurnValue: number, totalNetValue: number}

function CurrentStatisticsCard({ averageTps, totalMintValue, totalBurnValue, totalNetValue }: CurrentStatisticsCardProps) {
  return (
    <Card className='mb-5' data-testid='statisticsCard'>
      <Card.Header>Current Statistics</Card.Header>
      <Card.Body style = { { display: 'flex', justifyContent: 'space-between' }}>
        <section style={{}} >
          <div data-tip data-for={'Transactions Per Second'} >
            <span style={{ fontWeight: 'bold', textDecoration: 'underline', textDecorationStyle: 'dotted' }}>
              TPS
            </span>
            <br/>
            {new Intl.NumberFormat().format(averageTps)}
          </div>
          <ReactTooltip id='Transactions Per Second' effect="solid">
            Transactions Per Second
          </ReactTooltip>
        </section>
        <section style={{}} >
          <div>
            <span style={{ fontWeight: 'bold' }}>
              Total Mint Value
            </span>
            <br/>
            {new Intl.NumberFormat().format(totalMintValue)} XUS
          </div>
        </section>
        <section style={{}} >
          <div>
            <span style={{ fontWeight: 'bold' }}>
              Total Burn Value
            </span>
            <br/>
            {new Intl.NumberFormat().format(totalBurnValue)} XUS
          </div>
        </section>
        <section style={{}} >
          <div>
            <span style={{ fontWeight: 'bold' }}>
              Total Net Value
            </span>
            <br/>
            {new Intl.NumberFormat().format(totalNetValue)} XUS
          </div>
        </section>
      </Card.Body>
    </Card>
  )
}

function TransactionTable(props: { transactions: TransactionRow[] }) {
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
    recentTransactions: TransactionRow[],
    averageTps: number,
    totalMintAmount: number,
    totalBurnAmount: number,
    totalNetAmount: number,
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
          placeholder="Search by Address or Transaction Version"
          aria-label="Search by Address or Transaction Version"
          onKeyPress={handleSearch}
        />
      </InputGroup>
      <CurrentStatisticsCard averageTps={props.data.averageTps} totalMintValue={props.data.totalMintAmount} totalBurnValue={props.data.totalBurnAmount} totalNetValue={props.data.totalNetAmount} />
      <TransactionTable transactions={props.data.recentTransactions} />
    </Wrapper>
  )
}

function transformAnalyticsTransactionsOrErrors(
  response: DataOrErrors<transactionsQueryType>
): DataOrErrors<TransactionRow[]> {
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
    averageTps: NaN,
    totalMintAmount: NaN,
    totalBurnAmount: NaN,
    totalNetAmount: NaN,
  }
  return (
    <ApiRequestPage
      request={async () => {
        const txnsInLast10m = await postQueryToAnalyticsApi<countTransactionsInLast10MinutesType>(countTransactionsInLast10Minutes(), 'transactions_aggregate')
        const recentTxns = await postQueryToAnalyticsApi<transactionsQueryType>(transactionsQuery(), 'transactions').then(transformAnalyticsTransactionsOrErrors)
        const latestMintBurnNetAmounts = await postQueryToAnalyticsApi<GraphQLTypes['diem_in_circulation_realtime_aggregates'][]>(LatestMintBurnNetQuery(), 'diem_in_circulation_realtime_aggregates')

        if (txnsInLast10m.errors || recentTxns.errors || latestMintBurnNetAmounts.errors) {
          return {
            // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
            data: null, errors: [].concat(txnsInLast10m.errors).concat(recentTxns.errors).concat(latestMintBurnNetAmounts.errors).filter((error) => error !== null)
          }
        } else {
          return {
            data: {
              recentTransactions: recentTxns.data,
              averageTps: txnsInLast10m.data!.aggregate.count / 600,
              totalMintAmount: latestMintBurnNetAmounts.data![0]?.total_mint_value,
              totalBurnAmount: latestMintBurnNetAmounts.data![0]?.total_burn_value,
              totalNetAmount: latestMintBurnNetAmounts.data![0]?.total_net_value
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
