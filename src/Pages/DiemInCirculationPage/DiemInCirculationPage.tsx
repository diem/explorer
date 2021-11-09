import ApiRequestPage from '../../ApiRequestPage'
import { newPostQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import MainWrapper from '../../MainWrapper'
import Table from '../../Table'
import React from 'react'
import { DiemCurrencies } from '../../api_models/DiemInCirculation'
import { order_by } from '../../../utils/Analytics_Hasura_Api_Zeus_Client/zeus'

function DiemInCirculationPageWithResponse(props: { data: DiemCurrencies }) {
  const columns = [
    { Header: 'Currency', accessor: 'currency' },
    { Header: 'Total Net Value', accessor: 'total_net_value' },
    { Header: 'Timestamp', accessor: 'timestamp' },
  ]
  const data = Object.values(props.data).reduce((acc = [], currency) => {
    return acc.concat(currency)
  }
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

function getCurrency(currency: string) {
  return newPostQueryToAnalyticsApi<DiemCurrencies>({
    diem_in_circulation_realtime_aggregates: [
      {
        limit: 1,
        where: { currency: { _eq: currency } },
        order_by: [{ timestamp: order_by.desc }]
      },
      {
        currency: true,
        total_net_value: true,
        timestamp: true
      },
    ],
  })
}

export default function DiemInCirculationPage() {
  return (
    <ApiRequestPage
      request={async () => {
        const xusOrErrors = await getCurrency('XUS')
        const xdxOrErrors = await getCurrency('XDX')
        if (xusOrErrors.errors || xdxOrErrors.errors) {
          return {
            // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
            data: null, errors: [].concat(xusOrErrors.errors).concat(xdxOrErrors.errors).filter((error) => error !== null)
          }
        } else {
          console.log(xdxOrErrors)
          return {
            data: {
              xdx: xdxOrErrors.data.diem_in_circulation_realtime_aggregates ? xdxOrErrors.data.diem_in_circulation_realtime_aggregates[0] : [],
              xus: xusOrErrors.data.diem_in_circulation_realtime_aggregates[0]
            },
            errors: null
          }
        }
      }
      }
    >
      <DiemInCirculationPageWithResponse data={{ xus: [], xdx: [] }} />
    </ApiRequestPage>
  )
}
