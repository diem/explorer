import {
  setBlockchainApiResponse,
  setBlockchainNetworkError,
  setupIntegrationTestApiServer,
} from '../../test_utils/IntegrationTestApiServerTools'
import { getBlockchainTransaction } from './BlockchainClient'

const server = setupIntegrationTestApiServer()

describe('Blockchain Client', function () {
  it('should call .json before returning', async function () {
    const goodBlockchainResponse = {
      diem_chain_id: 21,
      diem_ledger_version: 319494022,
      diem_ledger_timestampusec: 1634769642185849,
      jsonrpc: '2.0',
      id: 1,
      result: [
        {
          bytes:
            '00bf8b70995067a61630bc72862f78eca7e50d00000000000001e001a11ceb0b010000000701000202020403061004160205181d0735600895011000000001010000020001000003020301010004010300010501060c0108000506080005030a020a020005060c05030a020a020109000b4469656d4163636f756e741257697468647261774361706162696c6974791b657874726163745f77697468647261775f6361706162696c697479087061795f66726f6d1b726573746f72655f77697468647261775f6361706162696c69747900000000000000000000000000000001010104010c0b0011000c050e050a010a020b030b0438000b0511020201070000000000000000000000000000000103585553035855530004033f86fa304186076fc9bc236081306bd50101000000000000000400040040420f00000000000000000000000000035855537e0e5460000000001500202a96965f77ac22066d797bcb02a5ba0e6d9ebed7ae4cc76cc51f3829d7f4b43b40b3d923feeaddfe06355b6987d4e339a43053d5a4dbbc307419c04291d293d955259d0a3a8587ff9f3e6b0ad6d9ce1fc4f1e00028c8a7e85f831086a230520c04',
          events: [
            {
              data: {
                amount: { amount: 1, currency: 'XUS' },
                metadata: '',
                receiver: '3f86fa304186076fc9bc236081306bd5',
                sender: 'bf8b70995067a61630bc72862f78eca7',
                type: 'sentpayment',
              },
              key: '0100000000000000bf8b70995067a61630bc72862f78eca7',
              sequence_number: 3557,
              transaction_version: 63622366,
            },
            {
              data: {
                amount: { amount: 1, currency: 'XUS' },
                metadata: '',
                receiver: '3f86fa304186076fc9bc236081306bd5',
                sender: 'bf8b70995067a61630bc72862f78eca7',
                type: 'receivedpayment',
              },
              key: '00000000000000003f86fa304186076fc9bc236081306bd5',
              sequence_number: 3470,
              transaction_version: 63622366,
            },
          ],
          gas_used: 511,
          hash: '1e2e6588f091923379e64338dcc09ab31be27cc6bb0fba3d85f42abc0ab0e56a',
          transaction: {
            chain_id: 21,
            expiration_timestamp_secs: 1616121470,
            gas_currency: 'XUS',
            gas_unit_price: 0,
            max_gas_amount: 1000000,
            public_key:
              '2a96965f77ac22066d797bcb02a5ba0e6d9ebed7ae4cc76cc51f3829d7f4b43b',
            script: {
              amount: 1,
              arguments: [
                '{ADDRESS: 3F86FA304186076FC9BC236081306BD5}',
                '{U64: 1}',
                '{U8Vector: 0x}',
                '{U8Vector: 0x}',
              ],
              code: 'a11ceb0b010000000701000202020403061004160205181d0735600895011000000001010000020001000003020301010004010300010501060c0108000506080005030a020a020005060c05030a020a020109000b4469656d4163636f756e741257697468647261774361706162696c6974791b657874726163745f77697468647261775f6361706162696c697479087061795f66726f6d1b726573746f72655f77697468647261775f6361706162696c69747900000000000000000000000000000001010104010c0b0011000c050e050a010a020b030b0438000b05110202',
              currency: 'XUS',
              metadata: '',
              metadata_signature: '',
              receiver: '3f86fa304186076fc9bc236081306bd5',
              type: 'peer_to_peer_with_metadata',
              type_arguments: ['XUS'],
            },
            script_bytes:
              'e001a11ceb0b010000000701000202020403061004160205181d0735600895011000000001010000020001000003020301010004010300010501060c0108000506080005030a020a020005060c05030a020a020109000b4469656d4163636f756e741257697468647261774361706162696c6974791b657874726163745f77697468647261775f6361706162696c697479087061795f66726f6d1b726573746f72655f77697468647261775f6361706162696c69747900000000000000000000000000000001010104010c0b0011000c050e050a010a020b030b0438000b0511020201070000000000000000000000000000000103585553035855530004033f86fa304186076fc9bc236081306bd501010000000000000004000400',
            script_hash:
              '04ea43107fafc12adcd09f6c68d63e194675d0ce843a7faf7cceb6c813db9d9a',
            secondary_public_keys: [],
            secondary_signature_schemes: [],
            secondary_signatures: [],
            secondary_signers: [],
            sender: 'bf8b70995067a61630bc72862f78eca7',
            sequence_number: 3557,
            signature:
              'b3d923feeaddfe06355b6987d4e339a43053d5a4dbbc307419c04291d293d955259d0a3a8587ff9f3e6b0ad6d9ce1fc4f1e00028c8a7e85f831086a230520c04',
            signature_scheme: 'Scheme::Ed25519',
            type: 'user',
          },
          version: 63622366,
          vm_status: { type: 'executed' },
        },
      ],
    }
    const expected = { data: goodBlockchainResponse.result[0], errors: null }
    setBlockchainApiResponse(server, goodBlockchainResponse)
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
    const blockchainResponse = {
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
    setBlockchainApiResponse(server, blockchainResponse)
    const result = await getBlockchainTransaction(
      "the query doesn't matter since we're mocking the service workers (msw)"
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
    setBlockchainNetworkError(server, error)
    const result = await getBlockchainTransaction(
      "the query doesn't matter since we're mocking the service workers (msw)"
    )
    expect(result).toEqual(expected)
  })
})
