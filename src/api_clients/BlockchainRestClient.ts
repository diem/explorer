// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import { getWithFetch, ResponseError, ResponseErrorType } from './FetchBroker'
import { Module, Resource } from './BlockchainRestTypes'
import { getCanonicalAddress, getGraphQlUrl } from '../utils'
import { BlockchainTransaction } from '../models/BlockchainTransaction'
import { Err, Result } from 'ts-results'


function getEnvUrl() {
  const envVal = getGraphQlUrl();
  let envUrl;
  switch (envVal) {
    case "TESTING":
      envUrl = import.meta.env.VITE_SI_BLOCKCHAIN_TESTNET_REST_URL;
      break;
    case "PREMAINNET":
      envUrl = import.meta.env.VITE_GRAPHQL_SI_PERMAINNET_URL;
      break;
    case "PRODUCTION":
      envUrl = import.meta.env.VITE_GRAPHQL_SI_PROD_URL;
      break;
    default:
      envUrl = import.meta.env.VITE_BLOCKCHAIN_REST_URL;
  }
  return envUrl
}

const ProdGraphQlUrl = getEnvUrl()
export async function getBlockchainTransaction(
  txnVersion: string
): Promise<Result<BlockchainTransaction, ResponseError>> {

  /* const ProdGraphQlUrl = window.location.origin.includes('siblockchain.net') ? import.meta.env.VITE_SI_BLOCKCHAIN_REST_URL : import.meta.env.VITE_BLOCKCHAIN_REST_URL; */


  const url = `${ProdGraphQlUrl}/transactions/${txnVersion}`

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

  const url = `${ProdGraphQlUrl}/accounts/${canonicalAddress.val
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
