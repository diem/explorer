import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import { postQueryToAnalyticsApi } from '../../AnalyticsClient'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import MintEventsPage from './MintEventsPage'
import { BrowserRouter } from 'react-router-dom'

jest.mock('../../AnalyticsClient', () => ({
  ...jest.requireActual('../../AnalyticsClient'),
  postQueryToAnalyticsApi: jest.fn(),
}))
const mockMintEvent = {
  amount: 730000,
  currency: 'XUS',
  key: '0000000000000000cf9405939fd0262b8bb8f2d513f63e11',
  receiver: 'CF9405939FD0262B8BB8F2D513F63E11',
  sequence_number: 36,
  transaction_version: 310350361
}

beforeEach(async () => {
  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi.mockResolvedValue({
    errors: null,
    data: [mockMintEvent]
  })
  render(<BrowserRouter><MintEventsPage /></BrowserRouter>)
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
})

describe('MintEventsPage', () => {
  it('should call the analytics client with a query', async () => {
    expect(postQueryToAnalyticsApi).toHaveBeenCalled()
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith('query getMintEvents {\n' +
        '  receivedmint_events(limit: 10, order_by: {transaction_version: desc}) {\n' +
        '    amount\n' +
        '    currency\n' +
        '    key\n' +
        '    receiver\n' +
        '    sequence_number\n' +
        '    transaction_version\n' +
        '  }\n' +
        '}', 'receivedmint_events')
  })
})
