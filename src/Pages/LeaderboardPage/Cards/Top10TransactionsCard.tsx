// TODO: give this some params
import ApiRequestComponent from '../../../ApiRequestComponent'

function Top10TransactionsTableBody({ data }: { data: unknown[] }) {
  console.log(data)
  return (<tbody data-testid='top-10-transactions' />)
}

export default function Top10TransactionsCard() {
  return (
    <section>
      <table>
        <thead>
        <tr>
          <td colSpan={3}>
            <h3 title='10 largest XUS transactions in the last 24 hours'>Top 10 Transactions (XUS)</h3>
          </td>
        </tr>
        </thead>
        <ApiRequestComponent request={() => Promise.resolve({
          data: [{
            transaction_version: 12345,
            amount: 54321,
          }],
        })}>
          <Top10TransactionsTableBody data={[]} />
        </ApiRequestComponent>
      </table>
    </section>)
}
