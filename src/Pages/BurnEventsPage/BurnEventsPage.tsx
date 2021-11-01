import ApiRequestPage from '../../ApiRequestPage'
import { DataOrErrors } from '../../api_clients/FetchTypes'
import { BurnEvent } from '../../api_models/BurnEvent'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import MainWrapper from '../../MainWrapper'
import Table from '../../Table'
import React from 'react'
import { TruncatedCell } from '../../TableComponents/TruncatedCell'
import { TransactionVersion } from '../../TableComponents/Link'

function BurnEventsPageWithResponse(props: { data: BurnEvent[] }) {
  const columns = [
    {
      Header: 'Transaction Version',
      accessor: 'transaction_version',
      Cell: TransactionVersion,
    },
    { Header: 'Amount', accessor: 'amount' },
    { Header: 'Currency', accessor: 'currency' },
    { Header: 'Key', accessor: 'key', Cell: TruncatedCell },
    { Header: 'Address', accessor: 'address', Cell: TruncatedCell },
    { Header: 'Sequence Number', accessor: 'sequence_number' },
  ]

  return (
    <MainWrapper>
      <>
        <h3 className="mb-2">Burn Events</h3>
        <Table columns={columns} data={props.data} />
      </>
    </MainWrapper>
  )
}

export const burnEventsPageText = 'This is Burn Events page'
const burnEventsPage = () => {
  return (
    <ApiRequestPage
      request={() =>
        postQueryToAnalyticsApi(
          'query getBurnEvents {\n' +
            '  burn_events(limit: 10, order_by: {transaction_version: desc}) {\n' +
            '    amount\n' +
            '    currency\n' +
            '    key\n' +
            '    sequence_number\n' +
            '    transaction_version\n' +
            '    address\n' +
            '  }\n' +
            '}',
          'burn_events'
        )
      }
    >
      <BurnEventsPageWithResponse data={[]} />
    </ApiRequestPage>
  )
}
export default burnEventsPage
