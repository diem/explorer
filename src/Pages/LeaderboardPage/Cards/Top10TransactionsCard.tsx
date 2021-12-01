import ApiRequestComponent from '../../../ApiRequestComponent'
import { DataOrErrors } from '../../../api_clients/FetchTypes'
import { postQueryToAnalyticsApi } from '../../../api_clients/AnalyticsClient'
import { top10Transactions } from '../../../api_clients/AnalyticsQueries'
import { KnownCurrency } from '../../../api_clients/BlockchainRestTypes'

export interface TopSentPaymentEvent {
  // eslint-disable-next-line camelcase
  transaction_version: number,
  amount: number,
}

type Top10TransactionsTableProps = { topPayments: TopSentPaymentEvent[] };

function Top10TransactionsTable({ data }: { data: Top10TransactionsTableProps }) {
  const { topPayments } = data
  return (
    <table data-testid='top-10-transactions'>
      <thead>
        <tr>
          <td colSpan={3}>
            <h3 title='10 largest XUS transactions in the last 24 hours'>Top 10 Transactions (XUS)</h3>
          </td>
        </tr>
        <tr>
          <td>Ranking</td>
          <td>Version</td>
          <td>Amount (XUS)</td>
        </tr>
      </thead>
      <tbody>{
        topPayments.map((transaction, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{transaction.transaction_version}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

async function getTopTransactions(currency: KnownCurrency): Promise<DataOrErrors<Top10TransactionsTableProps>> {
  const result: DataOrErrors<TopSentPaymentEvent[]> = await postQueryToAnalyticsApi(top10Transactions(currency), 'sentpayment_events')
  if ('data' in result) {
    return { data: { topPayments: result.data } }
  } else {
    throw new Error('Not implemented')
  }
}

export default function Top10TransactionsCard() {
  return (
    <section>
      <ApiRequestComponent request={getTopTransactions} args={['XUS']}>
        <Top10TransactionsTable data={{ topPayments: [] }} />
      </ApiRequestComponent>
    </section>)
}
