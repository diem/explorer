import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import { postQueryToAnalyticsApi } from '../../AnalyticsClient'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import DiemInCirculationPage from './DiemInCirculationPage'

jest.mock('../../AnalyticsClient', () => ({
  ...jest.requireActual('../../AnalyticsClient'),
  postQueryToAnalyticsApi: jest.fn(),
}))
const mockDiemInCirculation = {
  currency: 'XUS',
  total_net_value: 1013830869710000,
  timestamp: '2021-10-29T19:22:26.568447+00:00'
}

beforeEach(async () => {
  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi.mockResolvedValue({
    errors: null,
    data: [mockDiemInCirculation]
  })
  render(<BrowserRouter><DiemInCirculationPage /></BrowserRouter>)
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
})

describe('DiemInCirculationPage', () => {
  it('should call the analytics client with a query', async () => {
    expect(postQueryToAnalyticsApi).toHaveBeenCalled()
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(
      'query getDiemInCirculation {\n' +
      'xus: diem_in_circulation_realtime_aggregates(limit: 1, order_by: {timestamp: desc}, where: {currency: {_eq: "XUS"}}) {\n' +
      '    currency\n' +
      '    total_net_value\n' +
      '    timestamp\n' +
      '  }\n' +
      'xdx: diem_in_circulation_realtime_aggregates(limit: 1, order_by: {timestamp: desc}, where: {currency: {_eq: "XDS"}}) {\n' +
      '    currency\n' +
      '    total_net_value\n' +
      '    timestamp\n' +
      '  }\n' +
      '}', 'diem_in_circulation_realtime_aggregates')
  })
  it('should display event data in a table', async function () {
    expect(screen.queryByText('Total Diem In Circulation')).toBeInTheDocument()
    expect(screen.queryByText('Currency')).toBeInTheDocument()
    expect(screen.queryByText('Total Net Value')).toBeInTheDocument()
    expect(screen.queryByText('Timestamp')).toBeInTheDocument()

    expect(screen.queryByText(mockDiemInCirculation.currency)).toBeInTheDocument()
    expect(screen.queryByText(mockDiemInCirculation.total_net_value)).toBeInTheDocument()
    expect(screen.queryByText(mockDiemInCirculation.timestamp)).toBeInTheDocument()
  })
})
