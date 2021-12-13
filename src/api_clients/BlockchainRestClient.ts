import { DataOrErrors, FetchError } from './FetchTypes'
import { getWithFetch, ResponseError } from './FetchBroker'
import { Module, Resource } from './BlockchainRestTypes'
import { getCanonicalAddress } from '../utils'
import { BlockchainTransaction } from '../api_models/BlockchainTransaction'
import { Result } from 'ts-results'

export interface RestError {
  code: number
  message: string
}

type RestApiResource = Resource[] | Module[] | RestError | ResponseError
function toDataOrErrors<T>(result: Result<T, ResponseError>): Promise<DataOrErrors<T>> {
  if (result.ok) {
    return Promise.resolve({ data: result.val })
  } else {
    return Promise.resolve({ errors: [ { message: result.val } ] } )
  }
}

export async function getBlockchainTransaction(
  txnVersion: string
): Promise<DataOrErrors<BlockchainTransaction>> {
  const url = `${
    import.meta.env.VITE_BLOCKCHAIN_REST_URL
  }/transactions/${txnVersion}`

  return toDataOrErrors(await getWithFetch<BlockchainTransaction>(url, {}))
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
    return { errors: [{ message: canonicalAddress.val }] }
  }
  const url = `${import.meta.env.VITE_BLOCKCHAIN_REST_URL}/accounts/${
    canonicalAddress.val
  }/${assetType}`

  return toDataOrErrors(await getWithFetch<T>(url, {}))
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
