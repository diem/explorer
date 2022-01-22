// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import { FetchError } from './FetchTypes'
import { Gql } from '../../generated/Analytics_Hasura_Api_Zeus_Client/zeus'
import fetch from 'isomorphic-fetch'
import { Err, Ok, Result } from 'ts-results'

globalThis.fetch = fetch

export const postQueryToAnalyticsApi = async <T>(
  query: any,
  tableName?: string
): Promise<Result<T, FetchError[]>> => {
  try {
    const gqlResponse = await Gql.query(query)

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
