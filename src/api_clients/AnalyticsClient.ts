import { DataOrErrors } from './FetchTypes'
import { Gql } from '../../utils/Analytics_Hasura_Api_Zeus_Client/zeus'
import fetch from 'isomorphic-fetch'
globalThis.fetch = fetch
export type AnalyticsResponse<T> = DataOrErrors<T>

export const postQueryToAnalyticsApi = async <T>(
  query: any,
  tableName?: string
): Promise<AnalyticsResponse<T>> => {
  try {
    const gqlResponse = await Gql.query(query)
    return {
      errors: null,
      // @ts-ignore property accessor syntax breaks the code here
      data: tableName ? gqlResponse[tableName] : gqlResponse
    }
  } catch (err: any) {
    if ('response' in err) {
      return {
        errors: [...err.response.errors],
        data: null,
      }
    } else {
      return {
        errors: [{ message: err.message }],
        data: null,
      }
    }
  }
}
