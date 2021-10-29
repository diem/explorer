import ApiRequestPage from '../../ApiRequestPage'
import { postQueryToAnalyticsApi } from '../../AnalyticsClient'
import MainWrapper from '../../MainWrapper'
import Table from '../../Table'
import React from 'react'
import { DiemInCirculation } from '../../api_models/DiemInCirculation'

function DiemInCirculationPageWithResponse(props: { data: DiemInCirculation[] }) {
  const columns = [
    { Header: 'Currency', accessor: 'currency' },
    { Header: 'Total Net Value', accessor: 'total_net_value' },
    { Header: 'Timestamp', accessor: 'timestamp' }
  ]

  return (
    <MainWrapper>
      <>
        <h3 className="mb-2">Total Diem In Circulation</h3>
        <Table columns={columns} data={props.data} />
      </>
    </MainWrapper>
  )
}

export default function DiemInCirculationPage() {
  return (
    <ApiRequestPage
      request={() => postQueryToAnalyticsApi<DiemInCirculation[]>(
        'query getDiemInCirculation {\n' +
        '  diem_in_circulation_realtime_aggregates(distinct_on: currency) {\n' +
        '    currency\n' +
        '    total_net_value\n' +
        '    timestamp\n' +
        '  }\n' +
        '}', 'diem_in_circulation_realtime_aggregates')
      }>
      <DiemInCirculationPageWithResponse data={[]} />
    </ApiRequestPage>
  )
}
