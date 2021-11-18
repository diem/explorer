import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {
  BlockchainAccountModule,
  BlockchainAccountResource,
  getAccountResources,
  getAccountModules,
} from '../../api_clients/BlockchainRestClient'
import AccountPage from './AccountPage'
import {
  xdxBalanceResource,
  xusBalanceResource,
} from '../../../test_utils/MockBlockchainAccountResources'
import { testModules } from '../../../test_utils/MockBlockchainAccountModules'

jest.mock('../../api_clients/BlockchainRestClient', () => ({
  ...jest.requireActual('../../api_clients/BlockchainRestClient'),
  getAccountResources: jest.fn(),
  getAccountModules: jest.fn(),
}))

const mockAddress = '1fc5dd16a92e82a281a063e308ebcca9'
const renderSubject = async (
  resources: BlockchainAccountResource[] = [],
  modules: BlockchainAccountModule[] = []
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
    </BrowserRouter>
  )
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
}

describe('AccountPage', function () {
  it('should get data from the BlockchainRestClient', async function () {
    await renderSubject()
    expect(getAccountResources).toHaveBeenCalledWith(mockAddress)
    expect(getAccountModules).toHaveBeenCalledWith(mockAddress)
  })

  it('should display unsupported account when balance object, and Smart Contracts are not found', async function () {
    await renderSubject([], [])
    expect(screen.queryByText('Balances')).not.toBeInTheDocument()
    expect(screen.queryByText('Smart Contract Methods')).not.toBeInTheDocument()
    expect(screen.queryByText('Smart Contract Structs')).not.toBeInTheDocument()
    expect(screen.queryByText('Unsupported Account')).toBeInTheDocument()
  })

  describe('when there are account resources', function () {
    beforeEach(async () => await renderSubject([xdxBalanceResource, xusBalanceResource], []))

    it('should not display the Unsupported Account card', async () => {
      expect(screen.queryByText('Unsupported Account')).not.toBeInTheDocument()
    })

    it('should display Balance resource data in a table', async function () {
      expect(document.getElementById('objectPropertiesTable')).not.toEqual(null)
      const balancesTable = document.getElementById('objectPropertiesTable')!
      expect(screen.queryByText('Balances')).toBeInTheDocument()
      expect(
        within(balancesTable).queryByText(xdxBalanceResource.value.coin.value)
      ).toBeInTheDocument()
      expect(
        within(balancesTable).queryByText(
          xusBalanceResource.type.generic_type_params[0].name
        )
      ).toBeInTheDocument()
      expect(
        within(balancesTable).queryByText(xusBalanceResource.value.coin.value)
      ).toBeInTheDocument()
    })
    it('should display raw resources in a pretty printed format', async () => {
      expect(document.getElementById('rawResources')).not.toEqual(null)
      const rawResources = document.getElementById('rawResources')!

      expect(rawResources.textContent?.replace(/\s/g, '')).toEqual(
        JSON.stringify([xdxBalanceResource, xusBalanceResource])
      )
    })
  })

  describe('When there are Smart Contracts', function () {
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
        JSON.stringify(testModules)
      )
    })
  })
})
