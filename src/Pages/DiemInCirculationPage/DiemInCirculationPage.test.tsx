import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import DiemInCirculationPage from './DiemInCirculationPage'
import {
  currencyInCirculationPageQuery, currencyInCirculationPageQueryType,
  diemInCirculationHistoryQuery, DiemInCirculationHistoryType,
} from '../../api_clients/AnalyticsQueries'
import moment from 'moment'

jest.useFakeTimers().setSystemTime(new Date('2021-11-01').getTime())

jest.mock('../../api_clients/AnalyticsClient', () => ({
  ...jest.requireActual('../../api_clients/AnalyticsClient'),
  postQueryToAnalyticsApi: jest.fn(),
}))
const mockXusInCirculation: currencyInCirculationPageQueryType = {
  diem_in_circulation_realtime_aggregates: [{
    currency: 'XUS',
    total_net_value: 1040002525680000,
    timestamp: '2021-10-30T01:22:18.660956+00:00',
  }],
}
const mockXdxInCirculation: currencyInCirculationPageQueryType = {
  diem_in_circulation_realtime_aggregates: [],
}

const mockHistory: DiemInCirculationHistoryType = {
  diem_in_circulation_dynamic: [
    {
      timestamp: '2021-10-30T01:00:00+00:00',
      total_net: 1040002525680000
    },
    {
      timestamp: '2021-10-30T00:00:00+00:00',
      total_net: 1040002502000000
    }
  ]
}

const renderSubject = async (
  xusInCirculationResponse: currencyInCirculationPageQueryType = mockXusInCirculation,
  xdxInCirculationResponse: currencyInCirculationPageQueryType = mockXdxInCirculation,
  historyResponse: DiemInCirculationHistoryType = mockHistory,
) => {
  postQueryToAnalyticsApi
    // @ts-ignore TS is bad at mocking
    .mockResolvedValueOnce({ data: xusInCirculationResponse })
    .mockResolvedValueOnce({ data: xdxInCirculationResponse })
    .mockResolvedValueOnce({ data: historyResponse })
  render(
    <BrowserRouter>
      <DiemInCirculationPage/>
    </BrowserRouter>
  )
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
}

describe('DiemInCirculationPage', () => {
  it('should call the analytics client with a query', async () => {
    await renderSubject()
    expect(postQueryToAnalyticsApi).toHaveBeenCalledTimes(3)
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(
      currencyInCirculationPageQuery('XUS')
    )
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(
      currencyInCirculationPageQuery('XDX')
    )
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(diemInCirculationHistoryQuery('XUS'))
  })

  it('should display event data in a table', async () => {
    await renderSubject()
    expect(screen.queryByText('Total Diem In Circulation')).toBeInTheDocument()
    expect(screen.queryByText('Currency')).toBeInTheDocument()
    expect(screen.queryByText('Total Net Value')).toBeInTheDocument()
    expect(screen.queryByText('Timestamp')).toBeInTheDocument()

    expect(screen.queryByText('XUS')).toBeInTheDocument()

    const expectedNetValue = mockXusInCirculation.diem_in_circulation_realtime_aggregates[0]!.total_net_value
    expect(screen.queryByText(expectedNetValue)).toBeInTheDocument()

    const expectedTimestamp = moment(mockXusInCirculation.diem_in_circulation_realtime_aggregates[0]!.timestamp).format()
    expect(screen.queryByText(expectedTimestamp)).toBeInTheDocument()
  })

  describe('history graph', () => {
    it('should display a graph containing a history of diem circulation', async () => {
      await renderSubject()
      expect(screen.queryByText('Diem In Circulation History In Past Week')).toBeInTheDocument()
    })
    it('should use the historical data when there is historical data for the past week', () => {
      // mock a historical data response which contains some diem_in_circulation_dynamic rows
      // assert that the number of points in the graph is equal to the number of mocked rows
      // if it is feasible, assert that data about the points corresponds to the rows
      throw new Error('not implemented')
    })
    it('should use the current XUS in circulation when there is no historical data in the past week', () => {
      // mock a historical data response that is empty, i.e. []
      // also mock a diem in circulation response for XUS
      // assert that there is a single data point in the graph, corresponding to the diem in circulation response
      throw new Error('not implemented')
    })
  })
})
