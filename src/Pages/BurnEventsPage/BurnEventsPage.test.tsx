import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import { postQueryToAnalyticsApi } from '../../AnalyticsClient'
import BurnEventsPage from './BurnEventsPage'
import { render, screen, configure, waitForElementToBeRemoved } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

jest.mock('../../AnalyticsClient', () => ({
  ...jest.requireActual('../../AnalyticsClient'),
  postQueryToAnalyticsApi: jest.fn(),
}))
const mockBurnEvent = {
  amount: 950000,
  currency: 'XUS',
  key: '06000000000000000000000000000000000000000a550c18',
  sequence_number: 19178,
  transaction_version: 312039858,
  address: 'CF9405939FD0262B8BB8F2D513F63E11'
}

beforeEach(async () => {
  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi.mockResolvedValue({
    errors: null,
    data: [mockBurnEvent]
  })
  render(<BrowserRouter><BurnEventsPage /></BrowserRouter>)
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
})

describe('BurnEventsPage', () => {
  it('should call the analytics client with a query', async () => {
    expect(postQueryToAnalyticsApi).toHaveBeenCalled()
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith('query getBurnEvents {\n' +
            '  burn_events(limit: 10, order_by: {transaction_version: desc}) {\n' +
            '    amount\n' +
            '    currency\n' +
            '    key\n' +
            '    sequence_number\n' +
            '    transaction_version\n' +
            '    address\n' +
            '  }\n' +
            '}', 'burn_events')
  })
  it('should display event data in a table', async function () {
    expect(screen.queryByText('Burn Events')).toBeInTheDocument()
    expect(screen.queryByText('Amount')).toBeInTheDocument()
    expect(screen.queryByText('Currency')).toBeInTheDocument()
    expect(screen.queryByText('Address')).toBeInTheDocument()
    expect(screen.queryByText('Key')).toBeInTheDocument()
    expect(screen.queryByText('Sequence Number')).toBeInTheDocument()
    expect(screen.queryByText('Transaction Version')).toBeInTheDocument()

    expect(screen.queryByText(mockBurnEvent.amount)).toBeInTheDocument()
    expect(screen.queryByText(mockBurnEvent.currency)).toBeInTheDocument()
    expect(screen.queryByText('06000...50c18')).toBeInTheDocument()
    expect(screen.queryByText(mockBurnEvent.sequence_number)).toBeInTheDocument()
    expect(screen.queryByText(mockBurnEvent.transaction_version)).toBeInTheDocument()
    expect(screen.queryByText('CF940...63E11')).toBeInTheDocument()

    configure({ testIdAttribute: 'data-id' })
    expect(await screen.getAllByTestId('tooltip')[0]).toHaveTextContent(mockBurnEvent.key)
    expect(await screen.getAllByTestId('tooltip')[1]).toHaveTextContent(mockBurnEvent.address)
  })
})
