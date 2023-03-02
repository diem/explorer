// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import ApiRequestComponent from '../../ApiRequestComponent'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import MainWrapper from '../../MainWrapper'
import Table, { column } from '../../Table'
import React from 'react'
import {
  currencyInCirculationPageQuery,
  CurrencyInCirculationPageQueryType,
  diemInCirculationHistoryQuery,
  DiemInCirculationHistoryType,
} from '../../api_clients/AnalyticsQueries'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import moment from 'moment'
import { FetchError } from '../../api_clients/FetchTypes'
import { Card } from 'react-bootstrap'
import { Err, Ok, Result } from 'ts-results'

interface DiemCurrency {
  currency: string
  totalNetValue: number
  timestamp: string
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
  diemCurrencies: DiemCurrencies
  diemCirculationHistory: DiemCirculationHistory[]
}

const DiemInCirculationGraph: React.FC<{ data: DiemCirculationHistory[] }> = ({
  data,
}) => {
  const customTooltipOnYourLine = (e: any) => {
    if (e.active && e.payload != null && e.payload[0] != null) {
      return (<div className="custom-tooltip">
        <p className='graphTooltip'>{e.payload[0].payload["totalNet"]}</p>
      </div>);
    }
    else {
      return "";
    }
  }
  const graphWidth = (len: number) => {
    let gWidth = 350;
    if (len > 1 && len < 8) {
      gWidth = len * 135
    }
    else if (len >= 8) {
      gWidth = 850
    }
    return gWidth
  }
  return (
    <Card
      data-testid='circulation-graph-card'
      data-test-points-quantity={data.length}
    >
      <Card.Header>Diem In Circulation History In Past Week</Card.Header>
      <Card.Body>
        {data.length > 0 ?
          <LineChart width={graphWidth(data.length)} height={300} data={data}
            margin={{ top: 10, bottom: 10, left: 100, right: 10 }}
          >
            <CartesianGrid strokeDasharray="2 7" />
            <XAxis padding={{ left: 30, right: 30 }}
              dataKey='timestamp'
              tickFormatter={(timestamp) =>
                moment(timestamp).format('MM/DD HH:mm')
              }
            />
            <YAxis dataKey='totalNet' />
            <Tooltip content={customTooltipOnYourLine} />
            <Line type='monotone' dataKey='totalNet' stroke='#8884d8' />
          </LineChart> : "No Data Available"}
      </Card.Body>
    </Card >
  )
}

const TotalDiemInCirculationTable: React.FC<{
  diemCurrencies: DiemCurrencies
}> = ({ diemCurrencies }) => {
  const data: DiemCurrency[] = Object.values(diemCurrencies).reduce(
    (acc = [], currency) => {
      return acc.concat(currency)
    }
  )

  return (
    <>
      <h3 className='mb-2'>Total Diem In Circulation</h3>
      <Table
        columns={[
          column('Currency', 'currency'),
          column('Total Net Value', 'totalNetValue'),
          column('Timestamp', 'timestamp'),
        ]}
        data={data}
      />
    </>
  )
}

const DiemInCirculationPageWithResponse: React.FC<{
  data: DiemInCirculationResponse
}> = ({ data }) => {
  let historyPoints: DiemCirculationHistory[] = data.diemCirculationHistory
  if (historyPoints.length === 0 && 'xus' in data.diemCurrencies) {
    historyPoints = [
      {
        totalNet: data.diemCurrencies.xus!.totalNetValue,
        timestamp: data.diemCurrencies.xus!.timestamp,
      },
    ]
  }
  return (
    <MainWrapper>
      <>
        <TotalDiemInCirculationTable diemCurrencies={data.diemCurrencies} />
        <DiemInCirculationGraph data={historyPoints} />
      </>
    </MainWrapper>
  )
}

const request = async (): Promise<
  Result<DiemInCirculationResponse, FetchError[]>
> => {
  const xusOrErrors =
    await postQueryToAnalyticsApi<CurrencyInCirculationPageQueryType>(
      currencyInCirculationPageQuery('XUS')
    )
  const xdxOrErrors =
    await postQueryToAnalyticsApi<CurrencyInCirculationPageQueryType>(
      currencyInCirculationPageQuery('XDX')
    )
  const historyOrErrors =
    await postQueryToAnalyticsApi<DiemInCirculationHistoryType>(
      diemInCirculationHistoryQuery('XUS')
    )

  if (xusOrErrors.err || xdxOrErrors.err || historyOrErrors.err) {
    return Err(
      []
        // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
        .concat(xusOrErrors.errors)
        // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
        .concat(xdxOrErrors.errors)
        // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
        .concat(historyOrErrors.errors)
        .filter((error) => error !== null)
    )
  } else {
    const xdxAggregate =
      xdxOrErrors.val.diem_in_circulation_realtime_aggregates[0]
    const xusAggregate =
      xusOrErrors.val.diem_in_circulation_realtime_aggregates[0]

    const diemCurrencies = {
      xdx: xdxAggregate && {
        // TODO: format this for human readability
        timestamp: moment(xdxAggregate.timestamp).toISOString(false),
        totalNetValue: xdxAggregate.total_net_value,
        currency: xdxAggregate.currency,
      },
      xus: xusAggregate && {
        timestamp: moment(xusAggregate.timestamp).toISOString(false),
        totalNetValue: xusAggregate.total_net_value,
        currency: xusAggregate.currency,
      },
    }
    return Ok({
      diemCurrencies,
      diemCirculationHistory:
        historyOrErrors.val.diem_in_circulation_dynamic.map((item) => ({
          timestamp: item.timestamp,
          totalNet: item.total_net,
        })),
    })
  }
}

export default function DiemInCirculationPage() {
  return (
    <ApiRequestComponent request={request}>
      <DiemInCirculationPageWithResponse
        data={{
          diemCurrencies: {},
          diemCirculationHistory: [],
        }}
      />
    </ApiRequestComponent>
  )
}
