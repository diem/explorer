import { DataOrErrors } from './FetchTypes'
import { Gql } from '../../utils/Analytics_Hasura_Api_Zeus_Client/zeus'
import fetch from 'isomorphic-fetch'

globalThis.fetch = fetch

export const postQueryToAnalyticsApi = async <T>(
  query: any,
  tableName?: string
): Promise<DataOrErrors<T>> => {
  try {
    const gqlResponse = await Gql.query(query)

    return {
      // @ts-ignore property accessor syntax breaks the code here
      data: tableName ? gqlResponse[tableName] : gqlResponse,
    }
  } catch (err: any) {
    if ('response' in err) {
      return {
        errors: [...err.response.errors],
      }
    } else {
      return {
        errors: [{ message: err.message }],
      }
    }
  }
}
