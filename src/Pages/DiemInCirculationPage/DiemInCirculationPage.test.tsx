import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import DiemInCirculationPage from './DiemInCirculationPage'
import { currencyInCirculationPageQuery } from '../../api_clients/AnalyticsQueries'

jest.mock('../../api_clients/AnalyticsClient', () => ({
  ...jest.requireActual('../../api_clients/AnalyticsClient'),
  postQueryToAnalyticsApi: jest.fn(),
}))
const mockXusInCirculation = {
  currency: 'XUS',
  total_net_value: 1040002525680000,
  timestamp: '2021-10-30T01:22:18.660956+00:00',
}

beforeEach(async () => {
  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi
    .mockResolvedValueOnce({
      errors: null,
      data: {
        diem_in_circulation_realtime_aggregates: [mockXusInCirculation],
      },
    })
    .mockResolvedValueOnce({
      errors: null,
      data: {
        diem_in_circulation_realtime_aggregates: [],
      },
    })
  render(
    <BrowserRouter>
      <DiemInCirculationPage />
    </BrowserRouter>
  )
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
})

describe('DiemInCirculationPage', () => {
  it('should call the analytics client with a query', async () => {
    expect(postQueryToAnalyticsApi).toHaveBeenCalledTimes(2)
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(
      currencyInCirculationPageQuery('XUS')
    )
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(
      currencyInCirculationPageQuery('XDX')
    )
  })
  it('should display event data in a table', async function () {
    expect(screen.queryByText('Total Diem In Circulation')).toBeInTheDocument()
    expect(screen.queryByText('Currency')).toBeInTheDocument()
    expect(screen.queryByText('Total Net Value')).toBeInTheDocument()
    expect(screen.queryByText('Timestamp')).toBeInTheDocument()

    expect(
      screen.queryByText(mockXusInCirculation.currency)
    ).toBeInTheDocument()
    expect(
      screen.queryByText(mockXusInCirculation.total_net_value)
    ).toBeInTheDocument()
    expect(
      screen.queryByText(mockXusInCirculation.timestamp)
    ).toBeInTheDocument()
  })
})
