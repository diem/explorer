import { DataOrErrors, FetchError } from './FetchTypes'
import { getWithFetch } from './FetchBroker'
import Config from '../config.json'

interface BlockchainAccountResourceType {

}

interface BlockchainAccountResourceValue {

}

interface BlockchainAccountResource {
  type: BlockchainAccountResourceType,
  value: BlockchainAccountResourceValue
}

interface BlockchainRestError {
  code: number,
  message: string
}

type BlockchainRestResponse<T> = T | BlockchainRestError

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
