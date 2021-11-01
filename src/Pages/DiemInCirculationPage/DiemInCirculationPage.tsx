import ApiRequestPage from '../../ApiRequestPage'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import MainWrapper from '../../MainWrapper'
import Table from '../../Table'
import React from 'react'
import { DiemCurrencies } from '../../api_models/DiemInCirculation'

function DiemInCirculationPageWithResponse(props: { data: DiemCurrencies }) {
  const columns = [
    { Header: 'Currency', accessor: 'currency' },
    { Header: 'Total Net Value', accessor: 'total_net_value' },
    { Header: 'Timestamp', accessor: 'timestamp' },
  ]
  const data = Object.values(props.data).reduce((acc, currency) =>
    acc.concat(currency)
  )
  return (
    <MainWrapper>
      <>
        <h3 className="mb-2">Total Diem In Circulation</h3>
        <Table columns={columns} data={data} />
      </>
    </MainWrapper>
  )
}

export default function DiemInCirculationPage() {
  return (
    <ApiRequestPage
      request={() =>
        postQueryToAnalyticsApi<DiemCurrencies>(
          'query getDiemInCirculation {\n' +
            'xus: diem_in_circulation_realtime_aggregates(limit: 1, order_by: {timestamp: desc}, where: {currency: {_eq: "XUS"}}) {\n' +
            '    currency\n' +
            '    total_net_value\n' +
            '    timestamp\n' +
            '  }\n' +
            'xdx: diem_in_circulation_realtime_aggregates(limit: 1, order_by: {timestamp: desc}, where: {currency: {_eq: "XDX"}}) {\n' +
            '    currency\n' +
            '    total_net_value\n' +
            '    timestamp\n' +
            '  }\n' +
            '}'
        )
      }
    >
      <DiemInCirculationPageWithResponse data={{ xus: [], xdx: [] }} />
    </ApiRequestPage>
  )
}
