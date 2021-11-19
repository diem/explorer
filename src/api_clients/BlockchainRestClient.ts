import { DataOrErrors, FetchError } from './FetchTypes'
import { getWithFetch } from './FetchBroker'
import { Module, Resource } from './BlockchainRestTypes'

export interface RestError {
  code: number,
  message: string,
}

type RestResponse = Resource[] | Module[] | RestError

function transformBlockchainRestResponse<T extends Module[] | Resource[]>(
  response: RestResponse,
): DataOrErrors<T> {
  if ('message' in response && 'code' in response) {
    return {
      data: null,
      errors: [{ message: response.message }],
    }
  } else {
    return {
      data: response as T,
      errors: null,
    }
  }
}

async function getAccountAsset<T extends Resource[] | Module[]>(
  address: string,
  assetType: T extends Module[] ? 'modules' : T extends Resource [] ? 'resources' : never,
): Promise<DataOrErrors<T>> {
  const url = `${
    import.meta.env.VITE_BLOCKCHAIN_REST_URL
  }/accounts/${address}/${assetType}`
  return getWithFetch<RestResponse>(url, {})
    .then((response) => {
      return transformBlockchainRestResponse<T>(response)
    })
    .catch((error: FetchError) => {
      return {
        errors: [{ message: error.toString() }],
        data: null,
      }
    })
}

export function getAccountModules(
  address: string,
): Promise<DataOrErrors<Module[]>> {
  return getAccountAsset<Module[]>(address, 'modules')
}

export function getAccountResources(
  address: string,
): Promise<DataOrErrors<Resource[]>> {
  return getAccountAsset<Resource[]>(address, 'resources')
}
