import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { getAccountModules, getAccountResources } from '../../api_clients/BlockchainRestClient'
import AccountPage from './AccountPage'
import {
  diemAccountResource,
  xdxBalanceResource,
  xusBalanceResource,
} from '../../../test_utils/MockBlockchainAccountResources'
import { testModules } from '../../../test_utils/MockBlockchainAccountModules'
import { getCurrency, Module, Resource } from '../../api_clients/BlockchainRestTypes'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'

jest.mock('../../api_clients/BlockchainRestClient', () => ({
  ...jest.requireActual('../../api_clients/BlockchainRestClient'),
  getAccountResources: jest.fn(),
  getAccountModules: jest.fn(),
}))

jest.mock('../../api_clients/AnalyticsClient', () => ({
  postQueryToAnalyticsApi: jest.fn()
}))

const mockAddress = '1FC5DD16A92E82A281A063E308EBCCA9'
const renderSubject = async (
  resources: Resource[] = [],
  modules: Module[] = [],
  transactions: any = []
) => {
  // @ts-ignore TS is bad at mocking
  getAccountResources.mockResolvedValue({
    errors: null,
    data: resources,
  })

  // @ts-ignore TS is bad at mocking
  getAccountModules.mockResolvedValue({
    errors: null,
    data: modules,
  })

  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi.mockResolvedValue({
    errors: null,
    data: transactions
  })

  const mockHistory = {
    history: {} as any,
    location: {} as any,
    match: {
      path: '/address/:address',
      url: '/address/' + mockAddress,
      isExact: true,
      params: {
        address: mockAddress,
      },
    },
  }
  render(
    <BrowserRouter>
      <AccountPage {...mockHistory} />
    </BrowserRouter>,
  )
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
}

describe('AccountPage', function() {
  it('should get data from the BlockchainRestClient', async function() {
    await renderSubject()

    expect(getAccountResources).toHaveBeenCalledWith(mockAddress)
    expect(getAccountModules).toHaveBeenCalledWith(mockAddress)
  })

  it('should display unsupported account when balance object, and Smart Contracts are not found', async function() {
    await renderSubject([], [])

    expect(screen.queryByText('Balances')).not.toBeInTheDocument()
    expect(screen.queryByText('Smart Contract Methods')).not.toBeInTheDocument()
    expect(screen.queryByText('Smart Contract Structs')).not.toBeInTheDocument()
    expect(screen.queryByText('Unsupported Account')).toBeInTheDocument()
  })

  describe('when there are account resources', function() {
    beforeEach(async () => await renderSubject([
      xdxBalanceResource,
      xusBalanceResource,
      diemAccountResource,
    ], []))

    it('should not display the Unsupported Account card', async () => {
      expect(screen.queryByText('Unsupported Account')).not.toBeInTheDocument()
    })

    it('should display Balance resource data in a table', async function() {
      expect(document.getElementById('objectPropertiesTable')).not.toBeNull()

      const balancesTable = document.getElementById('objectPropertiesTable')!

      expect(screen.queryByText('Balances')).toBeInTheDocument()

      expect(
        within(balancesTable).queryByText(xdxBalanceResource.value.coin.value),
      ).toBeInTheDocument()

      expect(
        within(balancesTable).queryByText(
          getCurrency(xdxBalanceResource),
        ),
      ).toBeInTheDocument()

      expect(
        within(balancesTable).queryByText(xusBalanceResource.value.coin.value),
      ).toBeInTheDocument()
    })

    it('should display raw resources in a pretty printed format', async () => {
      expect(document.getElementById('rawResources')).not.toBeNull()
      const rawResources = document.getElementById('rawResources')!

      expect(rawResources.textContent?.replace(/\s/g, '')).toEqual(
        JSON.stringify([xdxBalanceResource, xusBalanceResource, diemAccountResource]),
      )
    })

    it('should display the sequence number in a card', async () => {
      expect(document.getElementById('sequenceNumber')).not.toBeNull()
      const sequenceNumberCard = document.getElementById('sequenceNumber')!

      expect(sequenceNumberCard.textContent).toMatch(/89647663/)
    })

    it('should display the authentication key in a card', async () => {
      expect(document.getElementById('authenticationKey')).not.toBeNull()
      const authenticationKeyCard = document.getElementById('authenticationKey')!

      expect(authenticationKeyCard.textContent).toMatch('0x16973acfaa51751234cdaffb3563b665bd3c1801820aa917993888b2fa8d8c0e')
    })
  })

  describe('when there are recent transactions', () => {
    it('should display the recent transactions', async () => {
      await renderSubject([], [], [
        {
          version: 372413434,
          txn_type: 3,
          expiration_timestamp: null,
          commit_timestamp: '2021-11-29T19:57:52+00:00',
          status: 1,
          sender: null
        }
      ])

      expect(document.getElementById('recentTransactions')).not.toEqual(null)

      const transactionsTable = document.getElementById('recentTransactions')!

      expect(screen.queryByText('Recent Transactions')).toBeInTheDocument()

      expect(within(transactionsTable).queryByText('Version')).toBeInTheDocument()
      expect(within(transactionsTable).queryByText('372413434')).toBeInTheDocument()

      expect(within(transactionsTable).queryByText('Timestamp')).toBeInTheDocument()
      expect(within(transactionsTable).queryByText('2021-11-29T19:57:52+00:00')).toBeInTheDocument()

      expect(within(transactionsTable).queryByText('Type')).toBeInTheDocument()
      expect(within(transactionsTable).queryByText('UserTransaction')).toBeInTheDocument()

      expect(within(transactionsTable).queryByText('Status')).toBeInTheDocument()
      expect(within(transactionsTable).queryByText('Executed')).toBeInTheDocument()
    })
  })

  describe('when there are Smart Contracts', function() {
    beforeEach(async () => await renderSubject([], testModules))

    it('should not display the Unsupported Account card', async () => {
      expect(screen.queryByText('Unsupported Account')).not.toBeInTheDocument()
    })

    it('should display Smart Contract Method Signatures in a card', async () => {
      expect(document.getElementById('smart-contract-methods')).not.toEqual(null)
      const methodsCard = document.getElementById('smart-contract-methods')!

      expect(methodsCard.textContent).toContain('fun exchangeXdxForXus(arg1: u64): bool')
    })

    it('should display Smart Contract Structs in a card', async () => {
      expect(document.getElementById('smart-contract-structs')).not.toEqual(null)
      const structsCard = document.getElementById('smart-contract-structs')!

      expect(structsCard.textContent).toContain('struct AccountType {\n\taccount_type: u64\n}')
    })

    it('should display raw modules in a pretty printed format', async () => {
      expect(document.getElementById('rawModules')).not.toEqual(null)
      const rawModules = document.getElementById('rawModules')!

      expect(rawModules.textContent?.replace(/\s/g, '')).toEqual(
        JSON.stringify(testModules),
      )
    })
  })
})
