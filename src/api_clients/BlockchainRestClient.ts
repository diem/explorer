import { DataOrErrors, FetchError } from './FetchTypes'
import { getWithFetch } from './FetchBroker'

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

async function getAccountAsset<T>(address: string, assetType: string): Promise<DataOrErrors<T>> {
  const url = `${import.meta.env.VITE_BLOCKCHAIN_REST_URL}/accounts/${address}/${assetType}`
  return getWithFetch<BlockchainRestResponse<T>>(url, {})
    .then((response) => {
      return transformBlockchainRestResponse<T>(response)
    }).catch((error: FetchError) => {
      return { errors: [{ message: error.toString() }], data: null }
    })
}

export function getAccountModules(address: string): Promise<DataOrErrors<BlockchainAccountModule[]>> {
  return getAccountAsset<BlockchainAccountResource[]>(address, 'modules')
}

export function getAccountResources(address: string): Promise<DataOrErrors<BlockchainAccountResource[]>> {
  return getAccountAsset<BlockchainAccountResource[]>(address, 'resources')
}
