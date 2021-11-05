import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import {
  render,
  screen,
  configure,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { TransactionVersion } from '../../TableComponents/Link'
import { TruncatedCell } from '../../TableComponents/TruncatedCell'
import EventPage from './EventPage'

jest.mock('../../api_clients/AnalyticsClient', () => ({
  ...jest.requireActual('../../api_clients/AnalyticsClient'),
  postQueryToAnalyticsApi: jest.fn(),
}))
const mockFakeEvent = {
  hype: 'Over 9000',
  who: 'why?',
  currency: 'XUS',
  gas: 'The bad news is we ran out :(',
  sequence_number: 19178,
  transaction_version: '3120398580',
}

const query = 'the query doesn\'t matter because we\'re mocking the service workers'
const columns = [
  { Header: 'The hype', accessor: 'hype' },
  { Header: 'The who', accessor: 'who' },
  { Header: 'This is the currency', accessor: 'currency' },
  { Header: 'Gasoline', accessor: 'gas', Cell: TruncatedCell },
  { Header: 'Sequence Number', accessor: 'sequence_number' },
  { Header: 'TXN', accessor: 'transaction_version', Cell: TruncatedCell }
]

const tableName = 'this string is arbitrary'
const eventType = 'Arbitrary'

beforeEach(async () => {
  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi.mockResolvedValue({
    errors: null,
    data: [mockFakeEvent],
  })
  render(
    <BrowserRouter>
      <EventPage query={query} columns={columns} tableName={tableName} eventType={eventType}/>
    </BrowserRouter>
  )
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
})

describe('EventPage', () => {
  it('should call the analytics client with a query', async () => {
    expect(postQueryToAnalyticsApi).toHaveBeenCalled()
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(query, tableName)
  })
  it('should display event data in a table', async function () {
    expect(screen.queryByText(`${eventType} Events`)).toBeInTheDocument()

    columns.map(col => col.Header).forEach((header) => {
      expect(screen.queryByText(header)).toBeInTheDocument()
    })

    expect(screen.queryByText(mockFakeEvent.hype)).toBeInTheDocument()
    expect(screen.queryByText(mockFakeEvent.who)).toBeInTheDocument()
    expect(screen.queryByText(mockFakeEvent.currency)).toBeInTheDocument()
    expect(screen.queryByText('The b...ut :(')).toBeInTheDocument()
    expect(screen.queryByText(mockFakeEvent.sequence_number)).toBeInTheDocument()
    expect(screen.queryByText(mockFakeEvent.transaction_version)).toBeInTheDocument()
    expect(screen.queryByText('31203...98580')).toBeInTheDocument()

    configure({ testIdAttribute: 'data-id' })
    expect(await screen.getAllByTestId('tooltip')[0]).toHaveTextContent(mockFakeEvent.gas)
    expect(await screen.getAllByTestId('tooltip')[1]).toHaveTextContent(mockFakeEvent.transaction_version.toString())
  })
})
