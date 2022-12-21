// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import { FetchError } from './FetchTypes'
import { Chain } from '../../generated/Analytics_Hasura_Api_Zeus_Client/zeus'
import fetch from 'isomorphic-fetch'
import { Err, Ok, Result } from 'ts-results'
import { getGraphQlUrl } from '../utils'

globalThis.fetch = fetch

function getEnvUrl() {
  let envVal = getGraphQlUrl();
  let envUrl;
  switch (envVal) {
    case "TESTING":
      envUrl = import.meta.env.VITE_GRAPHQL_SI_TESTNET_URL;
      break;
    case "PREMAINNET":
      envUrl = import.meta.env.VITE_GRAPHQL_SI_PERMAINNET_URL;
      break;
    case "PRODUCTION":
      envUrl = import.meta.env.VITE_GRAPHQL_SI_PROD_URL;
      break;
    default:
      envUrl = import.meta.env.VITE_GRAPHQL_URL;
  }
  return envUrl
}

const url = getEnvUrl()
const GraphQlUrl = import.meta.env.MODE === 'test' ? 'http://localhost:8888' : url;
const GqlNew = Chain(`${GraphQlUrl}/v1/graphql`)
export const postQueryToAnalyticsApi = async <T>(
  query: any,
  tableName?: string
): Promise<Result<T, FetchError[]>> => {


  try {
    const gqlResponse = await GqlNew.query(query)

    // @ts-ignore property accessor syntax breaks the code here
    return Ok(tableName ? gqlResponse[tableName] : gqlResponse)
  } catch (err: any) {
    return 'response' in err && 'errors' in err.response
      ? Err([
        ...err.response.errors.map(
          ({ message }: { message: string }) => message
        ),
      ])
      : Err([{ message: err.message }])
  }
}
