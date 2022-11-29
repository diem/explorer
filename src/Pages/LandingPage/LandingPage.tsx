// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import { FormControl, InputGroup } from 'react-bootstrap'
import React, { FormEvent, KeyboardEvent, ReactNode, useState } from 'react'
import MainWrapper from '../../MainWrapper'
import {
  TransactionRow,
} from '../../models/TransactionModel'
import { useHistory } from 'react-router-dom'
import './LandingPage.css'
import { getCanonicalAddress } from '../../utils'

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



/* function CurrentStatisticsCard({
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
} */

type LandingPageContentProps = {
  recentTransactions: TransactionRow[]
  averageTps: number
  totalMintAmount: number
  totalBurnAmount: number
  totalNetAmount: number
}

function LandingPageContent({ data }: { data: LandingPageContentProps }) {
  /* const {
    averageTps,
    totalMintAmount,
    totalBurnAmount,
    totalNetAmount,
    recentTransactions,
  } = data */
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
      {/* <CurrentStatisticsCard
        averageTps={averageTps}
        totalMintValue={totalMintAmount}
        totalBurnValue={totalBurnAmount}
        totalNetValue={totalNetAmount}
      />
      <TransactionTable transactions={recentTransactions} /> */}
    </Wrapper>
  )
}



export default function LandingPage() {
  return (
    <LandingPageContent
      data={{
        recentTransactions: [],
        averageTps: NaN,
        totalMintAmount: NaN,
        totalBurnAmount: NaN,
        totalNetAmount: NaN,
      }}
    />
  )
}
