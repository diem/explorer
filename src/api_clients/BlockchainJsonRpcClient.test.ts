import {
  setJsonRpcBlockchainApiResponse,
  setBlockchainJsonRpcNetworkError,
  setupIntegrationTestApiServer,
} from '../../test_utils/IntegrationTestApiServerTools'
import { getBlockchainTransaction } from './BlockchainJsonRpcClient'

const server = setupIntegrationTestApiServer()
const goodBlockchainResponse = {
  diem_chain_id: 21,
  diem_ledger_version: 335072472,
  diem_ledger_timestampusec: 1635809647329181,
  jsonrpc: '2.0',
  id: 1,
  result: [
    {
      bytes:
        '001fc5dd16a92e82a281a063e308ebcca9000000000000000001a001a11ceb0b010000000501000403040a050e0f071d44086110000000010102000100000302010005060c050a020a020a020002060c050a4469656d53797374656d0f56616c696461746f72436f6e6669670a7365745f636f6e6669671d7570646174655f636f6e6669675f616e645f7265636f6e666967757265000000000000000000000000000000010000010a0a000a010b020b030b0411000b000a0111010200040392d4d3baf2716b09d4f863176dc779800420bea0f4d1bb9fc7b3a601e1cf39630bd05ea8aa3582019451a9bab6503cc76bfd044c010000000000000000000000003e6cd96fbf6c7317182864627519587b358d79d7c4b8eb7fab00523b8b79bb26cbb1728a184fe9b16491a08990c345aaaa2ee0014eaaf5aef7359b62390b77042f012d040023efd8ce052618072064d32c8a1e134159dabfb2a4ae6793caf093d16e65bb918ad08aff217aeddc610800801a06000000000000000000000000000358555383aa106000000000150020f676c51bbd7d88b7633d842dbf223f6ba92f540f753ab91c80f95e57efd3bd0a405bf130a5a7a6079d9de7d412f5322ea75f20da722d10c462441aa6c3155a5806c849c17441491f1a5d7806f1476ac9077d6cd7e4ca6e97b851988ce927d0e200',
      events: [],
      gas_used: 619,
      hash: '7f07e74ac4dfee84da0e868149f3488eaf2aa2df594be59c24cb2cfafb818416',
      transaction: {
        chain_id: 21,
        expiration_timestamp_secs: 1611704963,
        gas_currency: 'XUS',
        gas_unit_price: 0,
        max_gas_amount: 400000,
        public_key:
          'f676c51bbd7d88b7633d842dbf223f6ba92f540f753ab91c80f95e57efd3bd0a',
        script: {
          arguments: [
            '{ADDRESS: 92D4D3BAF2716B09D4F863176DC77980}',
            '{U8Vector: 0xbea0f4d1bb9fc7b3a601e1cf39630bd05ea8aa3582019451a9bab6503cc76bfd}',
            '{U8Vector: 0x010000000000000000000000003e6cd96fbf6c7317182864627519587b358d79d7c4b8eb7fab00523b8b79bb26cbb1728a184fe9b16491a08990c345aaaa2ee0014eaaf5aef7359b62390b77}',
            '{U8Vector: 0x012d040023efd8ce052618072064d32c8a1e134159dabfb2a4ae6793caf093d16e65bb918ad08aff217aeddc610800}',
          ],
          code: 'a11ceb0b010000000501000403040a050e0f071d44086110000000010102000100000302010005060c050a020a020a020002060c050a4469656d53797374656d0f56616c696461746f72436f6e6669670a7365745f636f6e6669671d7570646174655f636f6e6669675f616e645f7265636f6e666967757265000000000000000000000000000000010000010a0a000a010b020b030b0411000b000a01110102',
          type: 'set_validator_config_and_reconfigure',
          type_arguments: [],
        },
        script_bytes:
          'a001a11ceb0b010000000501000403040a050e0f071d44086110000000010102000100000302010005060c050a020a020a020002060c050a4469656d53797374656d0f56616c696461746f72436f6e6669670a7365745f636f6e6669671d7570646174655f636f6e6669675f616e645f7265636f6e666967757265000000000000000000000000000000010000010a0a000a010b020b030b0411000b000a0111010200040392d4d3baf2716b09d4f863176dc779800420bea0f4d1bb9fc7b3a601e1cf39630bd05ea8aa3582019451a9bab6503cc76bfd044c010000000000000000000000003e6cd96fbf6c7317182864627519587b358d79d7c4b8eb7fab00523b8b79bb26cbb1728a184fe9b16491a08990c345aaaa2ee0014eaaf5aef7359b62390b77042f012d040023efd8ce052618072064d32c8a1e134159dabfb2a4ae6793caf093d16e65bb918ad08aff217aeddc610800',
        script_hash:
          'c53d52844332bf7df524ed5f6181c770de5d9960b7fb4f5ce99049e1b6036101',
        secondary_public_keys: [],
        secondary_signature_schemes: [],
        secondary_signatures: [],
        secondary_signers: [],
        sender: '1fc5dd16a92e82a281a063e308ebcca9',
        sequence_number: 0,
        signature:
          '5bf130a5a7a6079d9de7d412f5322ea75f20da722d10c462441aa6c3155a5806c849c17441491f1a5d7806f1476ac9077d6cd7e4ca6e97b851988ce927d0e200',
        signature_scheme: 'Scheme::Ed25519',
        type: 'user',
      },
      version: 502,
      vm_status: {
        type: 'executed',
      },
    },
  ],
}
const badBlockchainResponse = {
  diem_chain_id: 21,
  diem_ledger_version: 319478169,
  diem_ledger_timestampusec: 1634768610144093,
  jsonrpc: '2.0',
  id: 1,
  error: {
    code: -32602,
    message: "Invalid params for method 'get_transactions'",
    data: null,
  },
}

describe('Blockchain JSON RPC Client', function () {
  it('should pass data through', async function () {
    const expected = {
      data: { ...goodBlockchainResponse.result[0] },
      errors: null,
    }
    setJsonRpcBlockchainApiResponse(server, goodBlockchainResponse)
    const result = await getBlockchainTransaction(
      "the version doesn't matter since we're mocking the service workers (msw)"
    )
    expect(result).toEqual(expected)
  })
  it('should pass errors through', async function () {
    const expected = {
      data: null,
      errors: [{ message: "Invalid params for method 'get_transactions'" }],
    }
    setJsonRpcBlockchainApiResponse(server, badBlockchainResponse)
    const result = await getBlockchainTransaction(
      "the version doesn't matter since we're mocking the service workers (msw)"
    )
    expect(result).toEqual(expected)
  })

  it('should pass network errors through like any other error', async function () {
    const error = 'The internet went boom 💥'
    const expected = {
      data: null,
      errors: [
        {
          message: `FetchError: request to https://fn0.premainnet.aosdev.diem.com/v1 failed, reason: ${error}`,
        },
      ],
    }
    setBlockchainJsonRpcNetworkError(server, error)
    const result = await getBlockchainTransaction(
      "the version doesn't matter since we're mocking the service workers (msw)"
    )
    expect(result).toEqual(expected)
  })
})
