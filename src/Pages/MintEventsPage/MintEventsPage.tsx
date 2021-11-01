import ApiRequestPage from '../../ApiRequestPage'
import React from 'react'
import MainWrapper from '../../MainWrapper'
import Table from '../../Table'
import { TransactionVersion } from '../../TableComponents/Link'
import { TruncatedCell } from '../../TableComponents/TruncatedCell'
import { MintEvent } from '../../api_models/MintEvent'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'

function MintEventsPageWithResponse(props: { data: MintEvent[] }) {
  const columns = [
    {
      Header: 'Transaction Version',
      accessor: 'transaction_version',
      Cell: TransactionVersion,
    },
    { Header: 'Amount', accessor: 'amount' },
    { Header: 'Currency', accessor: 'currency' },
    { Header: 'Key', accessor: 'key', Cell: TruncatedCell },
    { Header: 'Receiver', accessor: 'receiver', Cell: TruncatedCell },
    { Header: 'Sequence Number', accessor: 'sequence_number' },
  ]

  return (
    <MainWrapper>
      <>
        <h3 className="mb-2">Mint Events</h3>
        <Table columns={columns} data={props.data} />
      </>
    </MainWrapper>
  )
}

export default function MintEventsPage() {
  return (
    <ApiRequestPage
      request={() =>
        postQueryToAnalyticsApi<MintEvent[]>(
          'query getMintEvents {\n' +
            '  receivedmint_events(limit: 10, order_by: {transaction_version: desc}) {\n' +
            '    amount\n' +
            '    currency\n' +
            '    key\n' +
            '    receiver\n' +
            '    sequence_number\n' +
            '    transaction_version\n' +
            '  }\n' +
            '}',
          'receivedmint_events'
        )
      }
    >
      <MintEventsPageWithResponse data={[]} />
    </ApiRequestPage>
  )
}
