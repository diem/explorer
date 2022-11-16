// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import { Card, FormControl, InputGroup } from 'react-bootstrap'
import React, { FormEvent, KeyboardEvent, ReactNode, useState } from 'react'
import ApiRequestComponent, {
  PlainErrorComponent,
  PlainLoadingComponent,
  PlainValue,
} from '../../ApiRequestComponent'
import MainWrapper from '../../MainWrapper'
import {
  TransactionRow,
  transformAnalyticsTransactionIntoTransaction,
} from '../../models/TransactionModel'
import Table, { column } from '../../Table'
import { useHistory } from 'react-router-dom'
import './LandingPage.css'
import { TransactionVersion } from '../../TableComponents/Link'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import {
  CountTotalPayments,
  countTransactionsInLast10Minutes,
  CountTransactionsInLast10MinutesType,
  LatestMintBurnNetQuery,
  totalPaymentsQuery,
  transactionsQuery,
  TransactionsQueryType,
} from '../../api_clients/AnalyticsQueries'
import ReactTooltip from 'react-tooltip'
import { GraphQLTypes } from '../../../generated/Analytics_Hasura_Api_Zeus_Client/zeus'
import { getCanonicalAddress } from '../../utils'
import { Err, Ok, Result } from 'ts-results'
import { FetchError } from '../../api_clients/FetchTypes'
import TransactionHistory from '../Graphs/TransactionHistory'

function Wrapper(props: { children: ReactNode }) {
  return (
    <MainWrapper>
      <>
        <h2 className='mb-5' role='note'>
          Welcome To Diem Explorer
        </h2>
        {props.children}
      </>
    </MainWrapper>
  )
}

type CurrentStatisticsCardProps = {
  averageTps: number
  totalMintValue: number
  totalBurnValue: number
  totalNetValue: number
}

function CurrentStatisticsCard({
  averageTps,
  totalMintValue,
  totalBurnValue,
  totalNetValue,
}: CurrentStatisticsCardProps) {
  return (
    <Card className='mb-5' data-testid='statisticsCard'>
      <Card.Header>Current Statistics</Card.Header>
      <Card.Body>
        <dl
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div data-tip data-for={'Transactions Per Second'}>
            <dt
              style={{
                textDecoration: 'underline',
                textDecorationStyle: 'dotted',
              }}
            >
              TPS
              <ReactTooltip id='Transactions Per Second' effect='solid'>
                Transactions Per Second
              </ReactTooltip>
            </dt>
            <dd>{averageTps ? new Intl.NumberFormat().format(averageTps) : 0}</dd>
          </div>
          <div>
            <dt>Total Mint Value</dt>
            <dd>{totalMintValue ? new Intl.NumberFormat().format(totalMintValue) : 0} XUS</dd>
          </div>
          <div>
            <dt>Total Burn Value</dt>
            <dd>{totalBurnValue ? new Intl.NumberFormat().format(totalBurnValue) : 0} XUS</dd>
          </div>
          <div>
            <dt>XUS In Circulation</dt>
            <dd>{totalNetValue ? new Intl.NumberFormat().format(totalNetValue) : 0} XUS</dd>
          </div>
          <div>
            <dt>Total Payments</dt>
            <dd>
              <ApiRequestComponent
                request={() =>
                  postQueryToAnalyticsApi<CountTotalPayments>(
                    totalPaymentsQuery(),
                    'sentpayment_events_aggregate'
                  ).then((result) =>
                    result.ok ? Ok(result.val.aggregate.count) : result
                  )
                }
                loadingComponent={<PlainLoadingComponent />}
                errorComponent={<PlainErrorComponent />}
              >
                <PlainValue />
              </ApiRequestComponent>
            </dd>
          </div>
        </dl>
      </Card.Body>
    </Card>
  )
}

function TransactionTable({
  transactions,
}: {
  transactions: TransactionRow[]
}) {
  const showPagination = (data: any = [], count: number = 10) => {
    return data.length > count
  }

  return (
    <>
      <h3 className='mb-2'>Recent Transactions</h3>
      <Table
        columns={[
          column('Version', 'version', TransactionVersion),
          column('Timestamp', 'commitTimestamp'),
          column('Type', 'txnType'),
          column('Status', 'status'),
        ]}
        data={transactions}
        id='landingPageTransactions'
        isPaginated={true}
        pSize={10}
        showPaginationCus={showPagination(transactions, 10)}
        noOfRec={[10, 25, 50]}
      />
    </>
  )
}

type LandingPageContentProps = {
  recentTransactions: TransactionRow[]
  averageTps: number
  totalMintAmount: number
  totalBurnAmount: number
  totalNetAmount: number
}

function LandingPageContent({ data }: { data: LandingPageContentProps }) {
  const {
    averageTps,
    totalMintAmount,
    totalBurnAmount,
    totalNetAmount,
    recentTransactions,
  } = data
  const history = useHistory()
  const [isValid, setIsValid] = useState<boolean>(true)

  function getSearchRouteFromSearchTerm(term: string): string | null {
    if (/^[0-9]+$/i.test(term)) {
      return `/txn/${term}`
    }

    const maybeAddress = getCanonicalAddress(term)
    if (maybeAddress.ok) {
      return `/address/${maybeAddress.val}`
    }

    return null
  }

  function validateSearchTerm(event: FormEvent<HTMLInputElement>) {
    const searchTerm = (event.target as HTMLInputElement).value
    const searchRoute = getSearchRouteFromSearchTerm(searchTerm)
    setIsValid(searchRoute !== null || searchTerm === '')
  }

  function submitSearch(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const searchTerm = (event.target as HTMLInputElement).value
      const searchRoute = getSearchRouteFromSearchTerm(searchTerm)
      if (searchRoute !== null) {
        history.push(searchRoute)
      }
    }
  }

  return (
    <Wrapper>
      <InputGroup className='mb-5'>
        <FormControl
          placeholder='Search by Address or Transaction Version'
          aria-label='Search by Address or Transaction Version'
          onInput={validateSearchTerm}
          onKeyPress={submitSearch}
          isInvalid={!isValid}
        />
        <FormControl.Feedback type='invalid'>
          Invalid address or transaction version
        </FormControl.Feedback>
      </InputGroup>
      <CurrentStatisticsCard
        averageTps={averageTps}
        totalMintValue={totalMintAmount}
        totalBurnValue={totalBurnAmount}
        totalNetValue={totalNetAmount}
      />
      <TransactionHistory />
      <TransactionTable transactions={recentTransactions} />
    </Wrapper>
  )
}

function transformAnalyticsTransactionsResult(
  result: Result<TransactionsQueryType, FetchError[]>
): Result<TransactionRow[], FetchError[]> {
  return result.ok
    ? Ok(result.val.map(transformAnalyticsTransactionIntoTransaction))
    : result
}

const handleData = async (): Promise<
  Result<LandingPageContentProps, FetchError[]>
> => {
  const txnsInLast10m =
    await postQueryToAnalyticsApi<CountTransactionsInLast10MinutesType>(
      countTransactionsInLast10Minutes(),
      'transactions_aggregate'
    )

  const recentTxns = await postQueryToAnalyticsApi<TransactionsQueryType>(
    transactionsQuery(),
    'transactions'
  ).then(transformAnalyticsTransactionsResult)

  const latestMintBurnNetAmounts = await postQueryToAnalyticsApi<
    GraphQLTypes['diem_in_circulation_realtime_aggregates'][]
  >(LatestMintBurnNetQuery(), 'diem_in_circulation_realtime_aggregates')

  if (txnsInLast10m.err || recentTxns.err || latestMintBurnNetAmounts.err) {
    return Err(
      []
        // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
        .concat(txnsInLast10m.val)
        // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
        .concat(recentTxns.val)
        // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
        .concat(latestMintBurnNetAmounts.val)
        .filter((error) => error !== null)
    )
  } else {
    return Ok({
      recentTransactions: recentTxns.val,
      averageTps: txnsInLast10m.val.aggregate.count / 600,
      totalMintAmount: latestMintBurnNetAmounts.val[0]?.total_mint_value,
      totalBurnAmount: latestMintBurnNetAmounts.val[0]?.total_burn_value,
      totalNetAmount: latestMintBurnNetAmounts.val[0]?.total_net_value,
    })
  }
}

export default function LandingPage() {
  return (
    <ApiRequestComponent request={handleData}>
      <LandingPageContent
        data={{
          recentTransactions: [],
          averageTps: NaN,
          totalMintAmount: NaN,
          totalBurnAmount: NaN,
          totalNetAmount: NaN,
        }}
      />
    </ApiRequestComponent>
  )
}
