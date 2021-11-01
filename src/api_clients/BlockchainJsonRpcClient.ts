import Config from '../config.json'
import { JsonRpcResponse } from '@libra-opensource/client-sdk-typescript/dist/jsonRpc/types'
import { BlockchainTransaction } from '../api_models/BlockchainTransaction'
import { DataOrErrors, FetchError } from './FetchTypes'
import { postWithFetch } from './FetchBroker'

function transformBlockchainResponse (response: JsonRpcResponse<BlockchainTransaction>) : DataOrErrors<BlockchainTransaction> {
  if (response.error) {
    return {
      data: null,
      errors: [{ message: response.error.message }]
    }
  } else {
    return {
      // @ts-ignore (Tolerate a deficiency in library type)
      data: response.result[0],
      errors: null
    }
  }
}

export async function getBlockchainTransaction (version: string): Promise<DataOrErrors<BlockchainTransaction>> {
  const body = JSON.stringify({ jsonrpc: '2.0', method: 'get_transactions', params: [parseInt(version), 1, false], id: 1 })
  const headers = {
    'Content-type': 'application/json',
    Accept: '*/*'
  }
  return await postWithFetch<JsonRpcResponse<BlockchainTransaction>>(Config.DIEMX_BLOCKCHAIN_JSON_RPC_URL, body, headers)
    .then((response: JsonRpcResponse<BlockchainTransaction>) => {
      return transformBlockchainResponse(response)
    })
    .catch((error: FetchError) => {
      return { errors: [{ message: error.toString() }], data: null }
    })
}
