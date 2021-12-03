import ApiRequestComponent from '../../ApiRequestComponent'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import MainWrapper from '../../MainWrapper'
import Table, { column } from '../../Table'
import React from 'react'
import {
  currencyInCirculationPageQuery,
  currencyInCirculationPageQueryType,
  diemInCirculationHistoryQuery,
  DiemInCirculationHistoryType
} from '../../api_clients/AnalyticsQueries'
import { Line, LineChart, XAxis, YAxis } from 'recharts'
import moment from 'moment'
import { DataOrErrors } from '../../api_clients/FetchTypes'

interface DiemCurrency {
  currency: string,
  totalNetValue: number,
  timestamp: string,
}

interface DiemCurrencies {
  xus?: DiemCurrency
  xdx?: DiemCurrency
}

type DiemCirculationHistory = {
  totalNet: number
  timestamp: string
}

type DiemInCirculationResponse = {
  diemCurrencies: DiemCurrencies,
  diemCirculationHistory: DiemCirculationHistory[]
}

const DiemInCirculationGraph: React.FC<{ data: DiemCirculationHistory[] }> = ({ data }) => {
  console.log(data)
  return (
    <>
      <h3 className="mb-2">Diem In Circulation History In Past Week</h3>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="timestamp" tickFormatter={(timestamp) => moment(timestamp).format('MM/DD')}/>
        <YAxis/>
        <Line type="monotone" dataKey="totalNetValue" stroke="#82ca9d"/>
      </LineChart>
    </>
  )
}

const TotalDiemInCirculationTable: React.FC<{ diemCurrencies: DiemCurrencies }> = ({ diemCurrencies }) => {
  const data: DiemCurrency[] = Object.values(diemCurrencies).reduce((acc = [], currency) => {
    return acc.concat(currency)
  })

  return (
    <>
      <h3 className="mb-2">Total Diem In Circulation</h3>
      <Table columns={[
        column('Currency', 'currency'),
        column('Total Net Value', 'totalNetValue'),
        column('Timestamp', 'timestamp'),
      ]} data={data}/>
    </>
  )
}

const DiemInCirculationPageWithResponse: React.FC<{ data: DiemInCirculationResponse }> = ({ data }) => {
  return (
    <MainWrapper>
      <>
        <TotalDiemInCirculationTable diemCurrencies={data.diemCurrencies}/>
        <DiemInCirculationGraph data={data.diemCirculationHistory}/>
      </>
    </MainWrapper>
  )
}

const request = async (): Promise<DataOrErrors<DiemInCirculationResponse>> => {
  const xusOrErrors = await postQueryToAnalyticsApi<currencyInCirculationPageQueryType>(currencyInCirculationPageQuery('XUS'))
  const xdxOrErrors = await postQueryToAnalyticsApi<currencyInCirculationPageQueryType>(currencyInCirculationPageQuery('XDX'))
  const historyOrErrors = await postQueryToAnalyticsApi<DiemInCirculationHistoryType>(diemInCirculationHistoryQuery('XUS'))

  if ('errors' in xusOrErrors || 'errors' in xdxOrErrors || 'errors' in historyOrErrors) {
    return {
      // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
      errors: [].concat(xusOrErrors.errors).concat(xdxOrErrors.errors).concat(historyOrErrors.errors).filter((error) => error !== null)
    }
  } else {
    const xdxAggregate = xdxOrErrors.data.diem_in_circulation_realtime_aggregates[0]
    const xusAggregate = xusOrErrors.data.diem_in_circulation_realtime_aggregates[0]

    const diemCurrencies = {
      xdx: xdxAggregate && {
        // TODO: format this for human readability
        timestamp: moment(xdxAggregate.timestamp).format(),
        totalNetValue: xdxAggregate.total_net_value,
        currency: xdxAggregate.currency
      },
      xus: xusAggregate && {
        timestamp: moment(xusAggregate.timestamp).format(),
        totalNetValue: xusAggregate.total_net_value,
        currency: xusAggregate.currency
      },
    }
    return {
      data: {
        diemCurrencies,
        diemCirculationHistory: historyOrErrors.data.diem_in_circulation_dynamic.map(item => ({
          timestamp: item.timestamp,
          totalNet: item.total_net
        }))
      },
    }
  }
}

export default function DiemInCirculationPage() {
  return (
    <ApiRequestComponent request={request}>
      <DiemInCirculationPageWithResponse data={{
        diemCurrencies: {},
        diemCirculationHistory: [],
      }}/>
    </ApiRequestComponent>
  )
}
