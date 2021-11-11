import ApiRequestPage from '../../ApiRequestPage'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import MainWrapper from '../../MainWrapper'
import Table from '../../Table'
import React from 'react'
import { DiemCurrencies } from '../../api_models/DiemInCirculation'
import { currencyInCirculationPageQuery } from '../../api_clients/AnalyticsQueries'

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

// eslint-disable-next-line camelcase
export type AnalyticsCurrencyInCirculationResponse = { diem_in_circulation_realtime_aggregates: ['diem_in_circulation_realtime_aggregates'][] }

export default function DiemInCirculationPage() {
  return (
    <ApiRequestPage
      request={async () => {
        const xusOrErrors = await postQueryToAnalyticsApi<AnalyticsCurrencyInCirculationResponse>(currencyInCirculationPageQuery('XUS'))
        const xdxOrErrors = await postQueryToAnalyticsApi<AnalyticsCurrencyInCirculationResponse>(currencyInCirculationPageQuery('XDX'))
        if (xusOrErrors.errors || xdxOrErrors.errors) {
          return {
            // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
            data: null, errors: [].concat(xusOrErrors.errors).concat(xdxOrErrors.errors).filter((error) => error !== null)
          }
        } else {
          return {
            data: {
              xdx: xdxOrErrors.data!.diem_in_circulation_realtime_aggregates ? xdxOrErrors.data!.diem_in_circulation_realtime_aggregates[0] : [],
              xus: xusOrErrors.data!.diem_in_circulation_realtime_aggregates[0]
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
