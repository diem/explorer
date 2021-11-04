import {
  setupIntegrationTestApiServer,
  setBlockchainRestApiResponse,
  setBlockchainRestNetworkError,
} from '../../test_utils/IntegrationTestApiServerTools'
import { getAccountModules, getAccountResources } from './BlockchainRestClient'

const errorResponse = {
  code: 400,
  message: 'invalid account address: E58479132486A975C6FF1EF1F',
}
const goodResourceResponse = [
  {
    type: {
      type: 'struct',
      address: '0x1',
      module: 'VASP',
      name: 'ParentVASP',
      generic_type_params: [],
    },
    value: { num_children: '1784' },
  },
  {
    type: {
      type: 'struct',
      address: '0x1',
      module: 'Event',
      name: 'EventHandleGenerator',
      generic_type_params: [],
    },
    value: { addr: '0xe58479132486a97579eff0ec6ff1ef1f', counter: '4' },
  },
  {
    type: {
      type: 'struct',
      address: '0x1',
      module: 'Roles',
      name: 'RoleId',
      generic_type_params: [],
    },
    value: { role_id: '5' },
  },
  {
    type: {
      type: 'struct',
      address: '0x1',
      module: 'DiemAccount',
      name: 'Balance',
      generic_type_params: [
        {
          type: 'struct',
          address: '0x1',
          module: 'XDX',
          name: 'XDX',
          generic_type_params: [],
        },
      ],
    },
    value: { coin: { value: '0' } },
  },
  {
    type: {
      type: 'struct',
      address: '0x1',
      module: 'DiemAccount',
      name: 'Balance',
      generic_type_params: [
        {
          type: 'struct',
          address: '0x1',
          module: 'XUS',
          name: 'XUS',
          generic_type_params: [],
        },
      ],
    },
    value: { coin: { value: '13976000000' } },
  },
  {
    type: {
      type: 'struct',
      address: '0x1',
      module: 'DiemAccount',
      name: 'DiemAccount',
      generic_type_params: [],
    },
    value: {
      authentication_key:
        '0xeca9a32d2f1e3309e6be33a6a4688d1be58479132486a97579eff0ec6ff1ef1f',
      key_rotation_capability: {
        vec: [{ account_address: '0xe58479132486a97579eff0ec6ff1ef1f' }],
      },
      received_events: {
        counter: '12',
        guid: '0x0200000000000000e58479132486a97579eff0ec6ff1ef1f',
      },
      sent_events: {
        counter: '1784',
        guid: '0x0300000000000000e58479132486a97579eff0ec6ff1ef1f',
      },
      sequence_number: '4518',
      withdraw_capability: {
        vec: [{ account_address: '0xe58479132486a97579eff0ec6ff1ef1f' }],
      },
    },
  },
  {
    type: {
      type: 'struct',
      address: '0x1',
      module: 'AccountFreezing',
      name: 'FreezingBit',
      generic_type_params: [],
    },
    value: { is_frozen: false },
  },
  {
    type: {
      type: 'struct',
      address: '0x1',
      module: 'DualAttestation',
      name: 'Credential',
      generic_type_params: [],
    },
    value: {
      base_url: '0x',
      base_url_rotation_events: {
        counter: '0',
        guid: '0x0100000000000000e58479132486a97579eff0ec6ff1ef1f',
      },
      compliance_key_rotation_events: {
        counter: '0',
        guid: '0x0000000000000000e58479132486a97579eff0ec6ff1ef1f',
      },
      compliance_public_key: '0x',
      expiration_date: '18446744073709551615',
      human_name: '0x4354205641535035',
    },
  },
]
const goodModulesResponse = [
  {
    bytecode:
      '0xa11ceb0b0300000006010002030206050807070f0d081c100c2c04000000010001010001060900010a020342435308746f5f6279746573000000000000000000000000000000010001020000',
    abi: {
      address: '0x1',
      name: 'BCS',
      friends: [],
      exposed_functions: [
        {
          name: 'to_bytes',
          visibility: 'public',
          generic_type_params: [{ constraints: [] }],
          params: [
            {
              type: 'reference',
              mutable: false,
              to: { type: 'generic_type_param', index: 0 },
            },
          ],
          return: [{ type: 'vector', items: { type: 'u8' } }],
        },
      ],
      structs: [],
    },
  },
]
const fakeAddress =
  'theAddressDoesntMatterSinceWereMockingTheServiceWorkersWithMsw'
const resourcesPath = `/accounts/${fakeAddress}/resources`
const modulesPath = `/accounts/${fakeAddress}/modules`
const server = setupIntegrationTestApiServer()

const testPassesDataThrough = async (
  methodUnderTest: Function,
  path: string,
  response: any
) => {
  const expected = { data: response, errors: null }
  setBlockchainRestApiResponse(server, path, response)
  const result = await methodUnderTest(fakeAddress)
  expect(result).toEqual(expected)
}

const testPassesErrorsThrough = async (
  methodUnderTest: Function,
  path: string
) => {
  const expected = { data: null, errors: [{ message: errorResponse.message }] }
  setBlockchainRestApiResponse(server, path, errorResponse)
  const result = await methodUnderTest(fakeAddress)
  expect(result).toEqual(expected)
}

const testNetworkErrorsAreErrors = async (
  methodUnderTest: Function,
  path: string
) => {
  const error = 'The internet went boom 💥'
  const expected = {
    data: null,
    errors: [
      {
        message: `FetchError: request to ${
          import.meta.env.VITE_BLOCKCHAIN_REST_URL
        }${path} failed, reason: ${error}`,
      },
    ],
  }
  setBlockchainRestNetworkError(server, path, error)
  const result = await methodUnderTest(fakeAddress)
  expect(result).toEqual(expected)
}

describe('Blockchain REST Client', function () {
  describe('getAccountResources', function () {
    it('should pass data through', async () => {
      await testPassesDataThrough(
        getAccountResources,
        resourcesPath,
        goodResourceResponse
      )
    })
    it('should pass errors through', async () => {
      await testPassesErrorsThrough(getAccountResources, resourcesPath)
    })
    it('should pass network errors through like any other error', async () => {
      await testNetworkErrorsAreErrors(getAccountResources, resourcesPath)
    })
  })
  describe('getAccountModules', function () {
    it('should pass data through', async () => {
      await testPassesDataThrough(
        getAccountModules,
        modulesPath,
        goodModulesResponse
      )
    })
    it('should pass errors through', async () => {
      await testPassesErrorsThrough(getAccountModules, modulesPath)
    })
    it('should pass network errors through like any other error', async () => {
      await testNetworkErrorsAreErrors(getAccountModules, modulesPath)
    })
  })
})
