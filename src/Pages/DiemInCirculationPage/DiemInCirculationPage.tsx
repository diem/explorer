import ApiRequestComponent from '../../ApiRequestComponent'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import MainWrapper from '../../MainWrapper'
import Table from '../../Table'
import React from 'react'
import {
  currencyInCirculationPageQuery,
  currencyInCirculationPageQueryType, diemInCirculationHistoryQuery,
  DiemInCirculationHistoryType
} from '../../api_clients/AnalyticsQueries'
import { GraphQLTypes } from '../../../utils/Analytics_Hasura_Api_Zeus_Client/zeus'
import { Line, LineChart, XAxis, YAxis } from 'recharts'
import moment from 'moment'
import { DataOrErrors } from '../../api_clients/FetchTypes'

interface DiemCurrencies {
  xus: GraphQLTypes['diem_in_circulation_realtime_aggregates'][]
  xdx: GraphQLTypes['diem_in_circulation_realtime_aggregates'][]
}

type DiemCirculationHistory = {
  totalNetValue: number
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
  const columns = [
    {
      Header: 'Currency',
      accessor: 'currency'
    },
    {
      Header: 'Total Net Value',
      accessor: 'total_net_value'
    },
    {
      Header: 'Timestamp',
      accessor: 'timestamp'
    },
  ]

  const data = Object.values(diemCurrencies).reduce((acc = [], currency) => {
    return acc.concat(currency)
  })

  return (
    <>
      <h3 className="mb-2">Total Diem In Circulation</h3>
      <Table columns={columns} data={data}/>
    </>
  )
}

const DiemInCirculationPageWithResponse: React.FC<{ data: DiemInCirculationResponse }> = ({ data }) => {
  return (
    <MainWrapper>
      <>
        <TotalDiemInCirculationTable diemCurrencies={data.diemCurrencies} />
        <DiemInCirculationGraph data={data.diemCirculationHistory}/>
      </>
    </MainWrapper>
  )
}

const request = async (): Promise<DataOrErrors<DiemInCirculationResponse>> => {
  const xusOrErrors = await postQueryToAnalyticsApi<currencyInCirculationPageQueryType>(currencyInCirculationPageQuery('XUS'))
  const xdxOrErrors = await postQueryToAnalyticsApi<currencyInCirculationPageQueryType>(currencyInCirculationPageQuery('XDX'))
  const history = await postQueryToAnalyticsApi<DiemInCirculationHistoryType>(diemInCirculationHistoryQuery())
  if ('errors' in xusOrErrors || 'errors' in xdxOrErrors || 'errors' in history) {
    return {
      // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
      errors: [].concat(xusOrErrors.errors).concat(xdxOrErrors.errors).concat(history.errors).filter((error) => error !== null)
    }
  } else {
    console.log(history)
    return {
      data: {
        diemCurrencies: {
          xdx: xdxOrErrors.data.diem_in_circulation_realtime_aggregates ? xdxOrErrors.data.diem_in_circulation_realtime_aggregates[0] : [],
          xus: xusOrErrors.data.diem_in_circulation_realtime_aggregates[0]
        },
        diemCirculationHistory: history.data!.diem_in_circulation_realtime_aggregates.map(item => ({
          timestamp: item.timestamp,
          totalNetValue: item.total_net_value
        }))
      },
    }
  }
}


export default function DiemInCirculationPage() {
  return (
    <ApiRequestComponent request={request}>
      <DiemInCirculationPageWithResponse data={{
        diemCurrencies: {
          xdx: [],
          xus: []
        },
        diemCirculationHistory: []
      }}/>
    </ApiRequestComponent>
  )
}
