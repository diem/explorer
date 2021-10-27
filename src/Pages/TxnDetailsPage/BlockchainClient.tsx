import fetch from 'isomorphic-fetch'
import Config from '../../config.json'
import { JsonRpcResponse } from '@libra-opensource/client-sdk-typescript/dist/jsonRpc/types'
import { BlockchainTransaction } from '../../api_models/BlockchainTransaction'
import { DataOrErrors, FetchResponse } from '../../FetchType'

function transformHttpErrorsIntoFailedPromise<T> (response: FetchResponse<T>) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

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
  return await fetch(Config.DIEMX_BLOCKCHAIN_URL, {
    method: 'POST',
    body: JSON.stringify({ jsonrpc: '2.0', method: 'get_transactions', params: [parseInt(version), 1, false], id: 1 }),
    headers: {
      'Content-type': 'application/json',
      Accept: '*/*'
    }
  })
    .then((responseOrErrors: Response) => {
      return transformHttpErrorsIntoFailedPromise(responseOrErrors)
    })
    .then((response: FetchResponse<Promise<JsonRpcResponse<BlockchainTransaction>>>) => {
      return response.json()
    }).then((response: JsonRpcResponse<BlockchainTransaction>) => {
      return transformBlockchainResponse(response)
    })
    .catch((error) => {
      return { errors: [{ message: error.toString() }], data: null }
    })
}
