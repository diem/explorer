// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import ApiRequestComponent, {
  ErrorCardComponent,
  LoadingCardComponent,
} from '../../../ApiRequestComponent'
import { FetchError } from '../../../api_clients/FetchTypes'
import { postQueryToAnalyticsApi } from '../../../api_clients/AnalyticsClient'
import { top10Transactions } from '../../../api_clients/AnalyticsQueries'
import { KnownCurrency } from '../../../api_clients/BlockchainRestTypes'
import { Card } from 'react-bootstrap'
import Table, { column } from '../../../Table'
import ReactTooltip from 'react-tooltip'
import { TransactionVersion } from '../../../TableComponents/Link'
import { Ok, Result } from 'ts-results'

export interface TopSentPaymentEvent {
  // eslint-disable-next-line camelcase
  transaction_version: number
  amount: number
}

type Top10TransactionsTableProps = { topPayments: TopSentPaymentEvent[] }

function Top10TransactionsTable({
  data,
}: {
  data: Top10TransactionsTableProps
}) {
  const { topPayments } = data
  const paymentData = topPayments.map(
    (
      {
        // eslint-disable-next-line camelcase
        transaction_version,
        amount,
      },
      index
    ) => ({
      version: transaction_version,
      amount,
      rank: index + 1,
    })
  )
  return (
    <>
      <Card.Header>
        <div data-tip data-for='top-10-definition-xus'>
          Top 10 Transactions (XUS)
        </div>
        <ReactTooltip id='top-10-definition-xus'>
          10 largest transactions in XUS in the last 24 hours
        </ReactTooltip>
      </Card.Header>
      <Card.Body>
        <Table
          columns={[
            column('Ranking', 'rank'),
            column('Version', 'version', TransactionVersion),
            column('Amount (XUS)', 'amount'),
          ]}
          data={paymentData}
        />
      </Card.Body>
    </>
  )
}

async function getTopTransactions(
  currency: KnownCurrency
): Promise<Result<Top10TransactionsTableProps, FetchError[]>> {
  const result: Result<TopSentPaymentEvent[], FetchError[]> =
    await postQueryToAnalyticsApi(
      top10Transactions(currency),
      'sentpayment_events'
    )
  return result.ok ? Ok({ topPayments: result.val }) : result
}

export default function Top10TransactionsCard() {
  return (
    <Card data-testid='top-10-transactions'>
      <ApiRequestComponent
        request={getTopTransactions}
        args={['XUS']}
        errorComponent={
          <ErrorCardComponent title={'Top 10 Transactions (XUS)'} />
        }
        loadingComponent={
          <LoadingCardComponent title={'Top 10 Transactions (XUS)'} />
        }
      >
        <Top10TransactionsTable data={{ topPayments: [] }} />
      </ApiRequestComponent>
    </Card>
  )
}
