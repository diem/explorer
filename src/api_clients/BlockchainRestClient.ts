import { DataOrErrors, FetchError } from './FetchTypes'
import { getWithFetch } from './FetchBroker'
import Config from '../config.json'

export interface BlockchainAccountResourceType {
  name: string
}

export interface BlockchainAccountResourceValue {

}

export interface BlockchainAccountResource {
  type: BlockchainAccountResourceType,
  value: BlockchainAccountResourceValue
}

export interface BlockchainRestError {
  code: number,
  message: string
}

type BlockchainRestResponse<T> = T | BlockchainRestError

export type BlockchainAccountModule = any

export function getAccountModules(address: string): Promise<DataOrErrors<BlockchainAccountModule[]>> {
  return Promise.resolve({
    data: [],
    errors: null
  })
}

function transformBlockchainRestResponse<T>(response: BlockchainRestResponse<T>): DataOrErrors<T> {
  if ('message' in response && 'code' in response) {
    return {
      data: null, errors: [{ message: response.message }]
    }
  } else {
    return {
      data: response, errors: null
    }
  }
}

export function getAccountResources(address: string): Promise<DataOrErrors<BlockchainAccountResource[]>> {
  const url = `${Config.DIEMX_BLOCKCHAIN_API_URL}/accounts/${address}/resources`
  return getWithFetch<BlockchainRestResponse<BlockchainAccountResource[]>>(url, {})
    .then((response) => {
      return transformBlockchainRestResponse<BlockchainAccountResource[]>(response)
    }).catch((error: FetchError) => {
      return { errors: [{ message: error.toString() }], data: null }
    })
}
