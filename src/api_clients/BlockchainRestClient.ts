import { getWithFetch, ResponseError, ResponseErrorType } from './FetchBroker'
import { Module, Resource } from './BlockchainRestTypes'
import { getCanonicalAddress } from '../utils'
import { BlockchainTransaction } from '../api_models/BlockchainTransaction'
import { Err, Result } from 'ts-results'

export async function getBlockchainTransaction(
  txnVersion: string
): Promise<Result<BlockchainTransaction, ResponseError>> {
  const url = `${
    import.meta.env.VITE_BLOCKCHAIN_REST_URL
  }/transactions/${txnVersion}`

  return await getWithFetch<BlockchainTransaction>(url, {})
}

async function getAccountAsset<T extends Resource[] | Module[]>(
  address: string,
  assetType: T extends Module[]
    ? 'modules'
    : T extends Resource[]
    ? 'resources'
    : never
): Promise<Result<T, ResponseError>> {
  const canonicalAddress = getCanonicalAddress(address)
  if (canonicalAddress.err) {
    return Err({
      type: ResponseErrorType.UNHANDLED,
      message: canonicalAddress.val,
    })
  }

  const url = `${import.meta.env.VITE_BLOCKCHAIN_REST_URL}/accounts/${
    canonicalAddress.val
  }/${assetType}`

  return await getWithFetch<T>(url, {})
}

export function getAccountModules(
  address: string
): Promise<Result<Module[], ResponseError>> {
  return getAccountAsset<Module[]>(address, 'modules')
}

export function getAccountResources(
  address: string
): Promise<Result<Resource[], ResponseError>> {
  return getAccountAsset<Resource[]>(address, 'resources')
}
