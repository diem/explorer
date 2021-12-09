import {
  setupIntegrationTestApiServer,
  setBlockchainRestApiResponse,
  setBlockchainRestNetworkError,
} from '../test_utils/IntegrationTestApiServerTools'
import {
  getAccountModules,
  getAccountResources,
  getBlockchainTransaction,
} from './BlockchainRestClient'

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
const goodTransactionResponse = {
  type: 'user_transaction',
  version: '382751998',
  hash: '0xddb1c95a3197bcd227868bc9bb96f5f76134b7b4dd881d2bc66041b1e335b739',
  state_root_hash:
    '0x5534033901cc6bf7792dc0d14f17fbe8929b8a21808af1b398b9d3ca0292722e',
  event_root_hash:
    '0x414343554d554c41544f525f504c414345484f4c4445525f4841534800000000',
  gas_used: '282',
  success: false,
  vm_status:
    'Move abort by NOT_PUBLISHED - EPAYEE_DOES_NOT_EXIST\n A resource is required but not published. Example: access to non-existing AccountLimits resource.\n Attempted to send funds to an account that does not exist',
  sender: '0x5d2bedb24091a926624d2e439ccbbfd1',
  sequence_number: '11210',
  max_gas_amount: '1000000',
  gas_unit_price: '0',
  gas_currency_code: 'XUS',
  expiration_timestamp_secs: '1638829520',
  payload: {
    type: 'script_function_payload',
    function: '0x1::PaymentScripts::peer_to_peer_with_metadata',
    type_arguments: ['0x1::XUS::XUS'],
    arguments: ['0xdfb77b475a59d74510894d4ba82ea84c', '1', '0x', '0x'],
  },
  signature: {
    type: 'ed25519_signature',
    public_key:
      '0xb33b4d5e5058c9d660350e9d2de6890b48726ddf28efcddcd2de8048a72f6bc0',
    signature:
      '0x30617fa9ee239852a4f453a893d754d39a8fcd7b456c574b36197fb4749d93bf068c79a8cade88c42889c1a702975e0268a6b5c47b31486106c61febc1b5c205',
  },
  events: [],
}
const fakeAddress = '0000000000bf485d8190b38ecaa223d7'
const fakeTxnVersion = '382751998'
const resourcesPath = `/accounts/${fakeAddress}/resources`
const modulesPath = `/accounts/${fakeAddress}/modules`
const transactionPath = `/transactions/${fakeTxnVersion}`
const server = setupIntegrationTestApiServer()

const testPassesDataThrough = async (
  methodUnderTest: Function,
  path: string,
  response: any
) => {
  const expected = { data: response }
  setBlockchainRestApiResponse(server, path, response)
  const result = await methodUnderTest()
  expect(result).toEqual(expected)
}

const testPassesErrorsThrough = async (
  methodUnderTest: Function,
  path: string
) => {
  const expected = { errors: [{ message: errorResponse.message }] }
  setBlockchainRestApiResponse(server, path, errorResponse)
  const result = await methodUnderTest()
  expect(result).toEqual(expected)
}

const testNetworkErrorsAreErrors = async (
  methodUnderTest: Function,
  path: string
) => {
  const error = 'The internet went boom 💥'
  const expected = {
    errors: [
      {
        message: `FetchError: request to ${
          import.meta.env.VITE_BLOCKCHAIN_REST_URL
        }${path} failed, reason: ${error}`,
      },
    ],
  }
  setBlockchainRestNetworkError(server, path, error)
  const result = await methodUnderTest()
  expect(result).toEqual(expected)
}

describe('Blockchain REST Client', function () {
  describe('getAccountResources', function () {
    const getAccountResourcesUnderTest = () => getAccountResources(fakeAddress)
    it('should pass data through', async () => {
      await testPassesDataThrough(
        getAccountResourcesUnderTest,
        resourcesPath,
        goodResourceResponse
      )
    })
    it('should pass errors through', async () => {
      await testPassesErrorsThrough(getAccountResourcesUnderTest, resourcesPath)
    })
    it('should pass network errors through like any other error', async () => {
      await testNetworkErrorsAreErrors(
        getAccountResourcesUnderTest,
        resourcesPath
      )
    })
    it('should canonicalize the address before calling the blockchain', async () => {
      const expected = { data: goodResourceResponse }
      setBlockchainRestApiResponse(server, resourcesPath, goodResourceResponse)
      const nonCanonicalFakeAddress = 'bf485d8190b38ecaa223d7'
      const result = await getAccountResources(nonCanonicalFakeAddress)
      expect(result).toEqual(expected)
    })
    it('should return an error if the address is invalid', async () => {
      setBlockchainRestApiResponse(server, resourcesPath, errorResponse)
      const result = await getAccountResources('this address is invalid')
      expect(result).toEqual({
        errors: [
          {
            message:
              'getCanonicalAddress received Invalid address type : this address is invalid',
          },
        ],
      })
    })
  })
  describe('getAccountModules', function () {
    const getAccountModulesUnderTest = () => getAccountModules(fakeAddress)
    it('should pass data through', async () => {
      await testPassesDataThrough(
        getAccountModulesUnderTest,
        modulesPath,
        goodModulesResponse
      )
    })
    it('should pass errors through', async () => {
      await testPassesErrorsThrough(getAccountModulesUnderTest, modulesPath)
    })
    it('should pass network errors through like any other error', async () => {
      await testNetworkErrorsAreErrors(getAccountModulesUnderTest, modulesPath)
    })
  })

  describe('getTransaction', function () {
    const getBlockchainTransactionUnderTest = () =>
      getBlockchainTransaction(fakeTxnVersion)
    it('should pass data through', async () => {
      await testPassesDataThrough(
        getBlockchainTransactionUnderTest,
        transactionPath,
        goodTransactionResponse
      )
    })
    it('should pass errors through', async () => {
      await testPassesErrorsThrough(
        getBlockchainTransactionUnderTest,
        transactionPath
      )
    })
    it('should pass network errors through like any other error', async () => {
      await testNetworkErrorsAreErrors(
        getBlockchainTransactionUnderTest,
        transactionPath
      )
    })
  })
})
