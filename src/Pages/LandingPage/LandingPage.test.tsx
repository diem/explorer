import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import { render, screen, waitForElementToBeRemoved, within, } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import LandingPage from './LandingPage'
import {
  countTransactionsInLast10Minutes,
  landingPageQuery,
  landingPageQueryType
} from '../../api_clients/AnalyticsQueries'
import userEvent from '@testing-library/user-event'

const mockHistory = {
  push: jest.fn()
}

jest.mock('../../api_clients/AnalyticsClient', () => ({
  ...jest.requireActual('../../api_clients/AnalyticsClient'),
  postQueryToAnalyticsApi: jest.fn(),
}))

jest.mock('react-router-dom', () => {
  return ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => mockHistory
  })
})

jest.useFakeTimers().setSystemTime(new Date('2021-01-01').getTime())

const fakeTransaction = {
  __typename: 'transactions' as const,
  version: 502,
  commit_timestamp: '2021-04-19 00:30:00.000000 +00:00',
  txn_type: 3,
  status: 1,
  gas_used: 10,
  sender: 'someone',
  sequence_number: 12345,
  public_key: '🔑',
  chain_id: true,
  max_gas_amount: 3,
  gas_unit_price: 2.5,
  gas_currency: 'XUS',
  expiration_timestamp: '2021-04-19 00:30:00.000000 +00:00'
}
const renderSubject = async (
  transactions: landingPageQueryType = [fakeTransaction],
  countTxnsInLast10m: number = 42 * 600,
) => {
  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi.mockResolvedValueOnce({
    errors: null,
    data: { aggregate: { count: countTxnsInLast10m } },
  })
  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi.mockResolvedValueOnce({
    errors: null,
    data: transactions,
  })

  render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  )
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
}

describe('LandingPage', function () {
  it('should get data from the AnalyticsClient', async function () {
    await renderSubject()
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(landingPageQuery(), 'transactions')
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(countTransactionsInLast10Minutes(), 'transactions_aggregate')
  })

  it('should display most recent transactions in a table', async function () {
    await renderSubject()
    expect(document.getElementById('landingPageTransactions')).not.toEqual(null)
    const transactionsTable = document.getElementById('landingPageTransactions')!
    expect(screen.queryByText('Recent Transactions')).toBeInTheDocument()
    expect(within(transactionsTable).queryByText(fakeTransaction.version)).toBeInTheDocument()
    expect(within(transactionsTable).queryByText(fakeTransaction.commit_timestamp)).toBeInTheDocument()
    expect(within(transactionsTable).queryByText('UserTransaction')).toBeInTheDocument() // txn_type 3 === UserTransaction
    expect(within(transactionsTable).queryByText('Executed')).toBeInTheDocument() // status 1 === Executed
  })

  it('should display avg transactions per second in last 10m in a card', async () => {
    await renderSubject()
    expect(document.getElementById('averageTransactionsPerSecond')).not.toEqual(null)
    const tpsCard = document.getElementById('averageTransactionsPerSecond')!
    expect(screen.queryByText('Current Statistics')).toBeInTheDocument()
    expect(within(tpsCard).queryByText('TPS')).toBeInTheDocument()
    expect(within(tpsCard).queryByText('42')).toBeInTheDocument()
  })

  describe('Search Box', function () {
    it('should route to an address page if the search string has alphabetical characters', async () => {
      await renderSubject()
      userEvent.type(
        screen.getByLabelText('Search by Address / Txn Version'),
        '1fc5dd16a92e82a281a063e308ebcca9{enter}'
      )
      expect(mockHistory.push).toHaveBeenCalledWith('/address/1fc5dd16a92e82a281a063e308ebcca9')
    })
    it('should route to an transaction page if the search string is all numeric characters', async () => {
      await renderSubject()
      userEvent.type(
        screen.getByLabelText('Search by Address / Txn Version'),
        '74767203{enter}'
      )
      expect(mockHistory.push).toHaveBeenCalledWith('/txn/74767203')
    })
    it('should route to an address page if any character of the search string is not a digit', async () => {
      await renderSubject()
      userEvent.type(
        screen.getByLabelText('Search by Address / Txn Version'),
        '74767203!{enter}'
      )
      expect(mockHistory.push).toHaveBeenCalledWith('/address/74767203!')
    })
  })
})
