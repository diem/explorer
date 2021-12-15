import ApiRequestComponent, {
  ErrorCardComponent,
  LoadingCardComponent,
} from '../../../ApiRequestComponent'
import { postQueryToAnalyticsApi } from '../../../api_clients/AnalyticsClient'
import {
  AccountBalancesQueryType,
  top10AccountsQuery,
} from '../../../api_clients/AnalyticsQueries'
import { KnownCurrency } from '../../../api_clients/BlockchainRestTypes'
import { Card } from 'react-bootstrap'
import Table, { column } from '../../../Table'
import ReactTooltip from 'react-tooltip'
import { AccountAddress } from '../../../TableComponents/Link'
import { Ok, Result } from 'ts-results'
import { FetchError } from '../../../api_clients/FetchTypes'

export interface TopAccountEvent {
  address: string
  balance: number
}

type Top10AccountsTableProps = { topAccounts: TopAccountEvent[] }

function Top10AccountsTable({ data }: { data: Top10AccountsTableProps }) {
  const { topAccounts } = data
  const paymentData = topAccounts.map((item, index) => ({
    ...item,
    rank: index + 1,
  }))

  return (
    <>
      <Card.Header>
        <div data-tip data-for='top-10-definition-xus'>
          Top 10 Accounts (XUS)
        </div>
        <ReactTooltip id='top-10-definition-xus'>
          10 largest accounts in XUS currently
        </ReactTooltip>
      </Card.Header>
      <Card.Body>
        <Table
          columns={[
            column('Ranking', 'rank'),
            column('Address', 'address', AccountAddress),
            column('Amount (XUS)', 'balance'),
          ]}
          data={paymentData}
        />
      </Card.Body>
    </>
  )
}

async function getTopAccounts(
  currency: KnownCurrency
): Promise<Result<Top10AccountsTableProps, FetchError[]>> {
  const result: Result<TopAccountEvent[], FetchError[]> =
    await postQueryToAnalyticsApi<AccountBalancesQueryType>(
      top10AccountsQuery(currency),
      'accounts_balances'
    )
  return result.ok ? Ok({ topAccounts: result.val }) : result
}

export default function Top10AccountsCard() {
  return (
    <Card data-testid='top-10-accounts'>
      <ApiRequestComponent
        request={getTopAccounts}
        args={['XUS']}
        errorComponent={<ErrorCardComponent title={'Top 10 Accounts (XUS)'} />}
        loadingComponent={
          <LoadingCardComponent title={'Top 10 Accounts (XUS)'} />
        }
      >
        <Top10AccountsTable data={{ topAccounts: [] }} />
      </ApiRequestComponent>
    </Card>
  )
}
