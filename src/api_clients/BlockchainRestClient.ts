import { DataOrErrors, FetchError } from './FetchTypes'
import { getWithFetch } from './FetchBroker'
import { Module, Resource } from './BlockchainRestTypes'
import { getCanonicalAddress } from '../utils'

export interface RestError {
  code: number
  message: string
}

type RestResponse = Resource[] | Module[] | RestError

function transformBlockchainRestResponse<T extends Module[] | Resource[]>(
  response: RestResponse
): DataOrErrors<T> {
  if ('message' in response && 'code' in response) {
    return {
      errors: [{ message: response.message }],
    }
  } else {
    return {
      data: response as T,
    }
  }
}

async function getAccountAsset<T extends Resource[] | Module[]>(
  address: string,
  assetType: T extends Module[]
    ? 'modules'
    : T extends Resource[]
    ? 'resources'
    : never
): Promise<DataOrErrors<T>> {
  const canonicalAddress = getCanonicalAddress(address)
  if (canonicalAddress.err) {
    return { data: null, errors: [{ message: canonicalAddress.val }] }
  }
  const url = `${import.meta.env.VITE_BLOCKCHAIN_REST_URL}/accounts/${
    canonicalAddress.val
  }/${assetType}`
  return getWithFetch<RestResponse>(url, {})
    .then((response) => {
      return transformBlockchainRestResponse<T>(response)
    })
    .catch((error: FetchError) => {
      return {
        errors: [{ message: error.toString() }],
      }
    })
}

export function getAccountModules(
  address: string
): Promise<DataOrErrors<Module[]>> {
  return getAccountAsset<Module[]>(address, 'modules')
}

export function getAccountResources(
  address: string
): Promise<DataOrErrors<Resource[]>> {
  return getAccountAsset<Resource[]>(address, 'resources')
}
