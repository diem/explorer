import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {
  getAccountModules,
  getAccountResources,
} from '../../api_clients/BlockchainRestClient'
import AccountPage from './AccountPage'
import {
  diemAccountResource,
  xdxBalanceResource,
  xusBalanceResource,
} from '../../test_utils/MockBlockchainAccountResources'
import { testModules } from '../../test_utils/MockBlockchainAccountModules'
import {
  getCurrency,
  Module,
  Resource,
} from '../../api_clients/BlockchainRestTypes'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import { ResponseError } from '../../api_clients/FetchBroker'
import { DataOrErrors } from '../../api_clients/FetchTypes'
import { TransactionsQueryType } from '../../api_clients/AnalyticsQueries'

jest.mock('../../api_clients/BlockchainRestClient', () => ({
  ...jest.requireActual('../../api_clients/BlockchainRestClient'),
  getAccountResources: jest.fn(),
  getAccountModules: jest.fn(),
}))

jest.mock('../../api_clients/AnalyticsClient', () => ({
  postQueryToAnalyticsApi: jest.fn(),
}))

const mockAddress = '1fc5dd16a92e82a281a063e308ebcca9'

const mockHistoryPush = jest.fn()

function renderWithAddress(address: string) {
  mockHistoryPush.mockReset()
  const mockHistory = {
    history: {
      push: mockHistoryPush,
    } as any,
    location: {} as any,
    match: {
      path: '/address/:address',
      url: '/address/' + address,
      isExact: true,
      params: {
        address: address,
      },
    },
  }
  render(
    <BrowserRouter>
      <AccountPage {...mockHistory} />
    </BrowserRouter>
  )
}

const renderSubject = async (
  resources: DataOrErrors<Resource[]> = { data: [] },
  modules: DataOrErrors<Module[]> = { data: [] },
  transactions: DataOrErrors<TransactionsQueryType[]> = { data: [] }
) => {
  // @ts-ignore TS is bad at mocking
  getAccountResources.mockResolvedValue(resources)

  // @ts-ignore TS is bad at mocking
  getAccountModules.mockResolvedValue(modules)

  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi.mockResolvedValue(transactions)

  renderWithAddress(mockAddress)

  await waitForElementToBeRemoved(screen.queryAllByRole('loading'))
}

describe('AccountPage', function () {
  it('should get data from the Blockchain client and GraphQL client', async function () {
    await renderSubject()

    expect(getAccountResources).toHaveBeenCalledWith(mockAddress)
    expect(getAccountResources).toHaveBeenCalledTimes(1)
    expect(getAccountModules).toHaveBeenCalledWith(mockAddress)
    expect(getAccountModules).toHaveBeenCalledTimes(1)
    expect(postQueryToAnalyticsApi).toHaveBeenCalledTimes(1)
  })
  describe('when the address is invalid', () => {
    it('should forward to the AccountNotFound page', async () => {
      renderWithAddress('thisAddressIsInvalid')

      expect(mockHistoryPush).toHaveBeenCalledWith('/address/not-found')
      expect(mockHistoryPush).toHaveBeenCalledTimes(1)
    })
  })
  describe('when the account does not exists', function () {
    it('should forward to the 404 page', async () => {
      const notFoundResponse = {
        errors: [{ message: ResponseError.NOT_FOUND }],
      }
      await renderSubject(notFoundResponse, notFoundResponse, notFoundResponse)

      expect(mockHistoryPush.mock.calls[0]).toEqual(['/address/not-found'])
    })
  })

  describe('when the account exists', () => {
    describe('when there are account resources', function () {
      beforeEach(
        async () =>
          await renderSubject(
            {
              data: [
                xdxBalanceResource,
                xusBalanceResource,
                diemAccountResource,
              ],
            },
            { data: [] }
          )
      )

      it('should display Balance resource data in a table', async function () {
        expect(document.getElementById('objectPropertiesTable')).not.toBeNull()

        const balancesTable = document.getElementById('objectPropertiesTable')!

        expect(screen.queryByText('Balances')).toBeInTheDocument()

        expect(
          within(balancesTable).queryByText(xdxBalanceResource.value.coin.value)
        ).toBeInTheDocument()

        expect(
          within(balancesTable).queryByText(getCurrency(xdxBalanceResource))
        ).toBeInTheDocument()

        expect(
          within(balancesTable).queryByText(xusBalanceResource.value.coin.value)
        ).toBeInTheDocument()
      })

      it('should display raw resources in a pretty printed format', async () => {
        expect(document.getElementById('rawResources')).not.toBeNull()
        const rawResources = document.getElementById('rawResources')!

        expect(rawResources.textContent?.replace(/\s/g, '')).toEqual(
          JSON.stringify([
            xdxBalanceResource,
            xusBalanceResource,
            diemAccountResource,
          ])
        )
      })

      it('should display the sequence number in a card', async () => {
        expect(document.getElementById('sequenceNumber')).not.toBeNull()
        const sequenceNumberCard = document.getElementById('sequenceNumber')!

        expect(sequenceNumberCard.textContent).toMatch(/89647663/)
      })

      it('should display the authentication key in a card', async () => {
        expect(document.getElementById('authenticationKey')).not.toBeNull()
        const authenticationKeyCard =
          document.getElementById('authenticationKey')!

        expect(authenticationKeyCard.textContent).toMatch(
          '0x16973acfaa51751234cdaffb3563b665bd3c1801820aa917993888b2fa8d8c0e'
        )
      })

      it('should display event handles in a card', async () => {
        const eventHandlesCard = screen.queryByTestId('event-handles-card')!
        expect(eventHandlesCard).toBeInTheDocument()

        const eventHandlesTable: HTMLTableElement =
          eventHandlesCard.querySelector('table')!
        expect(eventHandlesTable).toBeInTheDocument()

        expect(eventHandlesTable.rows).toHaveLength(3)
        const receivedEventsRow = eventHandlesTable.rows.item(1)!
        const sentEventsRow = eventHandlesTable.rows.item(2)!

        expect(receivedEventsRow.textContent).toContain('received_events')
        expect(receivedEventsRow.textContent).toContain(
          diemAccountResource.value.received_events.counter
        )
        expect(receivedEventsRow.textContent).toContain(
          diemAccountResource.value.received_events.guid
        )

        expect(sentEventsRow.textContent).toContain('sent_events')
        expect(sentEventsRow.textContent).toContain(
          diemAccountResource.value.sent_events.counter
        )
        expect(sentEventsRow.textContent).toContain(
          diemAccountResource.value.sent_events.guid
        )
      })
    })

    describe('when there are recent transactions', () => {
      it('should display the recent transactions', async () => {
        await renderSubject(
          { data: [] },
          { data: [] },
          {
            data: [
              {
                // @ts-ignore
                version: 372413434,
                txn_type: 3,
                expiration_timestamp: '2021-12-14T00:56:08+00:00',
                commit_timestamp: '2021-11-29T19:57:52+00:00',
                status: 1,
                sender: '5D908A4BFCFF104F62ADBD423E449504',
              },
            ],
          }
        )

        expect(document.getElementById('recentTransactions')).not.toEqual(null)

        const transactionsTable = document.getElementById('recentTransactions')!

        expect(screen.queryByText('Recent Transactions')).toBeInTheDocument()

        expect(
          within(transactionsTable).queryByText('Version')
        ).toBeInTheDocument()
        expect(
          within(transactionsTable).queryByText('372413434')
        ).toBeInTheDocument()

        expect(
          within(transactionsTable).queryByText('Timestamp')
        ).toBeInTheDocument()
        expect(
          within(transactionsTable).queryByText('2021-11-29T19:57:52+00:00')
        ).toBeInTheDocument()

        expect(
          within(transactionsTable).queryByText('Type')
        ).toBeInTheDocument()
        expect(
          within(transactionsTable).queryByText('UserTransaction')
        ).toBeInTheDocument()

        expect(
          within(transactionsTable).queryByText('Status')
        ).toBeInTheDocument()
        expect(
          within(transactionsTable).queryByText('Executed')
        ).toBeInTheDocument()
      })
    })

    describe('when there are Smart Contracts', function () {
      beforeEach(
        async () => await renderSubject({ data: [] }, { data: testModules })
      )

      it('should display Smart Contract Method Signatures in a card', async () => {
        expect(document.getElementById('smart-contract-methods')).not.toEqual(
          null
        )
        const methodsCard = document.getElementById('smart-contract-methods')!

        expect(methodsCard.textContent).toContain(
          'fun exchangeXdxForXus(arg1: u64): bool'
        )
      })

      it('should display Smart Contract Structs in a card', async () => {
        expect(document.getElementById('smart-contract-structs')).not.toEqual(
          null
        )
        const structsCard = document.getElementById('smart-contract-structs')!

        expect(structsCard.textContent).toContain(
          'struct AccountType {\n\taccount_type: u64\n}'
        )
      })

      it('should display raw modules in a pretty printed format', async () => {
        expect(document.getElementById('rawModules')).not.toEqual(null)
        const rawModules = document.getElementById('rawModules')!

        expect(rawModules.textContent?.replace(/\s/g, '')).toEqual(
          JSON.stringify(testModules)
        )
      })
    })
  })
})
