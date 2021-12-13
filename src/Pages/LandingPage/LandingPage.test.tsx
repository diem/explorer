import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import LandingPage from './LandingPage'
import {
  countTransactionsInLast10Minutes,
  LatestMintBurnNetQuery,
  totalPaymentsQuery,
  transactionsQuery,
  TransactionsQueryType,
} from '../../api_clients/AnalyticsQueries'
import userEvent from '@testing-library/user-event'

jest.useFakeTimers().setSystemTime(new Date('2021-01-01').getTime())

const mockHistory = {
  push: jest.fn(),
}

jest.mock('../../api_clients/AnalyticsClient', () => ({
  ...jest.requireActual('../../api_clients/AnalyticsClient'),
  postQueryToAnalyticsApi: jest.fn(),
}))

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useHistory: () => mockHistory,
  }
})

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
  expiration_timestamp: '2021-04-19 00:30:00.000000 +00:00',
}
const renderSubject = async (
  transactions: TransactionsQueryType = [fakeTransaction],
  countTxnsInLast10m: number = 42 * 600
) => {
  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi.mockResolvedValueOnce({
    data: { aggregate: { count: countTxnsInLast10m } },
  })
  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi.mockResolvedValueOnce({
    data: transactions,
  })
  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi.mockResolvedValueOnce({
    data: [
      {
        total_burn_value: 700,
        total_mint_value: 800,
        total_net_value: 100,
      },
    ],
  })
  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi.mockResolvedValueOnce({
    data: {
      aggregate: {
        count: 123,
      },
    },
  })

  render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  )
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
}

describe('LandingPage', function () {
  beforeEach(() => {
    // @ts-ignore TS is bad at mocking
    postQueryToAnalyticsApi.mockReset()
    mockHistory.push.mockReset()
  })
  it('should get data from the AnalyticsClient', async function () {
    await renderSubject()
    expect(postQueryToAnalyticsApi).toHaveBeenCalledTimes(4)
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(
      transactionsQuery(),
      'transactions'
    )
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(
      countTransactionsInLast10Minutes(),
      'transactions_aggregate'
    )
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(
      LatestMintBurnNetQuery(),
      'diem_in_circulation_realtime_aggregates'
    )
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(
      totalPaymentsQuery(),
      'sentpayment_events_aggregate'
    )
  })

  it('should display most recent transactions in a table', async function () {
    await renderSubject()
    expect(document.getElementById('landingPageTransactions')).not.toEqual(null)
    const transactionsTable = document.getElementById(
      'landingPageTransactions'
    )!
    expect(screen.queryByText('Recent Transactions')).toBeInTheDocument()
    expect(
      within(transactionsTable).queryByText(fakeTransaction.version)
    ).toBeInTheDocument()
    expect(
      within(transactionsTable).queryByText(fakeTransaction.commit_timestamp)
    ).toBeInTheDocument()
    expect(
      within(transactionsTable).queryByText('UserTransaction')
    ).toBeInTheDocument()
    expect(
      within(transactionsTable).queryByText('Executed')
    ).toBeInTheDocument()
  })

  it('should display current statistics in a card', async () => {
    await renderSubject()
    const statisticsCard = screen.getByTestId('statisticsCard')
    expect(screen.queryByText('Current Statistics')).toBeInTheDocument()
    expect(within(statisticsCard).queryByText('TPS')).toBeInTheDocument()
    expect(within(statisticsCard).queryByText('42')).toBeInTheDocument()
    expect(
      within(statisticsCard).queryByText('Total Mint Value')
    ).toBeInTheDocument()
    expect(statisticsCard.textContent).toContain('800 XUS')
    expect(
      within(statisticsCard).queryByText('Total Burn Value')
    ).toBeInTheDocument()
    expect(statisticsCard.textContent).toContain('700 XUS')
    expect(
      within(statisticsCard).queryByText('XUS In Circulation')
    ).toBeInTheDocument()
    expect(statisticsCard.textContent).toContain('100 XUS')
    expect(
      within(statisticsCard).queryByText('Total Payments')
    ).toBeInTheDocument()
    expect(within(statisticsCard).queryByText('123')).toBeInTheDocument()
  })

  describe('Search Box', function () {
    ;[
      {
        description: 'when searching for full address without prefix',
        searchTerm: '1fc5dd16a92e82a281a063e308ebcca9',
        expectedRoute: '/address/1fc5dd16a92e82a281a063e308ebcca9',
      },
      {
        description: 'when searching for full address with prefix',
        searchTerm: '0x1fc5dd16a92e82a281a063e308ebcca9',
        expectedRoute: '/address/1fc5dd16a92e82a281a063e308ebcca9',
      },
      {
        description: 'when searching for partial address without prefix',
        searchTerm: '281a063e308ebcca9',
        expectedRoute: '/address/000000000000000281a063e308ebcca9',
      },
      {
        description: 'when searching for partial address with prefix',
        searchTerm: '0x281a063e308ebcca9',
        expectedRoute: '/address/000000000000000281a063e308ebcca9',
      },
      {
        description:
          'when searching for an uppercase partial address without prefix',
        searchTerm: '281A063E308EBCCA9',
        expectedRoute: '/address/000000000000000281a063e308ebcca9',
      },
      {
        description:
          'when searching for an uppercase partial address with prefix',
        searchTerm: '0x281A063E308EBCCA9',
        expectedRoute: '/address/000000000000000281a063e308ebcca9',
      },
      {
        description: 'when searching for transaction',
        searchTerm: '312039453',
        expectedRoute: '/txn/312039453',
      },
      {
        description:
          'should assume any all numeric search term is a transaction version',
        searchTerm: '99999999999999999999999999999999',
        expectedRoute: '/txn/99999999999999999999999999999999',
      },
    ].forEach((spec) => {
      it(`${spec.description}`, async () => {
        await renderSubject()
        userEvent.type(
          screen.getByLabelText('Search by Address or Transaction Version'),
          `${spec.searchTerm}{enter}`
        )
        expect(mockHistory.push).toHaveBeenCalledTimes(1)
        expect(mockHistory.push).toHaveBeenCalledWith(spec.expectedRoute)
      })
    })
    it('should perform no navigation and display an error if any character of the search string (besides account prefix) is non hexadecimal', async () => {
      await renderSubject()
      const searchBar: HTMLInputElement = screen.getByLabelText(
        'Search by Address or Transaction Version'
      )!
      userEvent.type(searchBar, '74767203!{enter}')
      expect(mockHistory.push).not.toHaveBeenCalled()
      expect(searchBar.classList).toContain('is-invalid')
      expect(
        screen.getByText('Invalid address or transaction version')
      ).toBeVisible()
    })
    it('should perform no navigation but display no error when the search string is empty', async () => {
      await renderSubject()
      const searchBar: HTMLInputElement = screen.getByLabelText(
        'Search by Address or Transaction Version'
      )!
      userEvent.type(searchBar, '{enter}')
      expect(mockHistory.push).not.toHaveBeenCalled()
      expect(searchBar.classList).not.toContain('is-invalid')
      // The following assertion is disabled due to a limitation of JSDOM CSS processing:
      // expect(screen.getByText('Invalid address or transaction version')).not.toBeVisible()
      // Refer to the following for more details:
      // https://github.com/testing-library/dom-testing-library/issues/196#issuecomment-487432178
      // https://github.com/testing-library/jest-dom/issues/209
      // However, the preceding assertion sufficiently describes the CSS change that causes the message to be hidden.
    })
  })
})
