import ApiRequestComponent from '../../../ApiRequestComponent'
import { DataOrErrors } from '../../../api_clients/FetchTypes'
import { postQueryToAnalyticsApi } from '../../../api_clients/AnalyticsClient'
import { top10Transactions } from '../../../api_clients/AnalyticsQueries'
import { KnownCurrency } from '../../../api_clients/BlockchainRestTypes'
import { Card } from 'react-bootstrap'
import Table from '../../../Table'
import ReactTooltip from 'react-tooltip'

export interface TopSentPaymentEvent {
  // eslint-disable-next-line camelcase
  transaction_version: number,
  amount: number,
}

type Top10TransactionsTableProps = { topPayments: TopSentPaymentEvent[] };

function Top10TransactionsTable({ data }: { data: Top10TransactionsTableProps }) {
  const { topPayments } = data
  const paymentData = topPayments.map(({
    // eslint-disable-next-line camelcase
    transaction_version,
    amount,
  }, index) => ({
    transactionVersion: transaction_version,
    amount,
    rank: index + 1,
  }))
  return (
    <>
      <Card.Header>
        <div data-tip data-for='top-10-definition-xus'>
          Top 10 Transactions (XUS)
        </div>
        <ReactTooltip id='top-10-definition-xus'>
          10 largest transactions in XUS in the last 24 hours
        </ReactTooltip>
        { /* TODO: display a tooltip explaining this */}
      </Card.Header>
      <Card.Body>
        <Table columns={[
          {
            Header: 'Ranking',
            accessor: 'rank',
          },
          {
            Header: 'Version',
            accessor: 'transactionVersion',
          },
          {
            Header: 'Amount (XUS)',
            accessor: 'amount',
          },
        ]} data={paymentData} />
      </Card.Body>
    </>
  )
}

async function getTopTransactions(currency: KnownCurrency): Promise<DataOrErrors<Top10TransactionsTableProps>> {
  const result: DataOrErrors<TopSentPaymentEvent[]> = await postQueryToAnalyticsApi(top10Transactions(currency), 'sentpayment_events')
  if ('data' in result) {
    return { data: { topPayments: result.data } }
  } else {
    return result
  }
}

export default function Top10TransactionsCard() {
  return (
    <Card data-testid='top-10-transactions'>
      <ApiRequestComponent request={getTopTransactions} args={['XUS']}>
        <Top10TransactionsTable data={{ topPayments: [] }} />
      </ApiRequestComponent>
    </Card>
  )
}
