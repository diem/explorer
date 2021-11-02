import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {
  BlockchainAccountModule,
  BlockchainAccountResource,
  getAccountResources,
  getAccountModules
} from '../../api_clients/BlockchainRestClient'
import AccountPage from './AccountPage'
import {
  freezingBitResource, hasAccountLimitsSmartContract,
  rolesResource, toBytesSmartContract,
  xdxBalanceResource,
  xusBalanceResource
} from '../../../test_utils/MockBlockchainAccountResources'

jest.mock('../../api_clients/BlockchainRestClient', () => ({
  ...jest.requireActual('../../api_clients/BlockchainRestClient'),
  getAccountResources: jest.fn(),
  getAccountModules: jest.fn(),
}))

const mockAddress = '1fc5dd16a92e82a281a063e308ebcca9'
const renderSubject = async (
  resources: BlockchainAccountResource[] = [rolesResource],
  modules: BlockchainAccountModule[] = [toBytesSmartContract]
) => {
  // @ts-ignore TS is bad at mocking
  getAccountResources.mockResolvedValue({
    errors: null,
    data: resources
  })
  // @ts-ignore TS is bad at mocking
  getAccountModules.mockResolvedValue({
    errors: null,
    data: modules
  })
  const mockHistory = {
    history: {} as any,
    location: {} as any,
    match: {
      path: '/address/:version',
      url: '/address/' + mockAddress,
      isExact: true,
      params: {
        address: '1fc5dd16a92e82a281a063e308ebcca9'
      }
    }
  }
  render(<BrowserRouter><AccountPage {...mockHistory}/></BrowserRouter>)
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
}

describe('AccountPage', function () {
  it('should get data from the BlockchainRestClient', async function () {
    await renderSubject()

    expect(getAccountResources).toHaveBeenCalledWith(mockAddress)
    expect(getAccountModules).toHaveBeenCalledWith(mockAddress)
  })

  it('should display Balance resource data in a table', async function () {
    await renderSubject([xdxBalanceResource, xusBalanceResource])
    expect(document.getElementById('objectPropertiesTable')).not.toEqual(null)
    const balancesTable = document.getElementById('objectPropertiesTable')!
    expect(screen.queryByText('Balances')).toBeInTheDocument()
    expect(within(balancesTable).queryByText(xdxBalanceResource.value.coin.value)).toBeInTheDocument()
    expect(within(balancesTable).queryByText(xusBalanceResource.type.generic_type_params[0].name)).toBeInTheDocument()
    expect(within(balancesTable).queryByText(xusBalanceResource.value.coin.value)).toBeInTheDocument()
  })
  it('should display raw resources in a pretty printed format', async () => {
    await renderSubject([freezingBitResource])
    expect(document.getElementById('rawResources')).not.toEqual(null)
    const rawResources = document.getElementById('rawResources')!

    expect(rawResources.textContent?.replace(/\s/g, '')).toEqual(JSON.stringify([freezingBitResource]))
  })
  it('should display raw modules in a pretty printed format', async () => {
    await renderSubject(undefined, [hasAccountLimitsSmartContract])
    expect(document.getElementById('rawModules')).not.toEqual(null)
    const rawModules = document.getElementById('rawModules')!

    expect(rawModules.textContent?.replace(/\s/g, '')).toEqual(JSON.stringify([hasAccountLimitsSmartContract]))
  })
})
