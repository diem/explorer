import Config from '../config.json'
import { postWithFetch } from './FetchBroker'
import { DataOrErrors, FetchError } from './FetchTypes'
import { Gql, order_by } from '../../utils/Analytics_Hasura_Api_Zeus_Client/zeus'

export type AnalyticsResponse<T> = {
  data: T | undefined
  errors: AnalyticsError[] | undefined
}

export type AnalyticsError = {
  extensions: { path: string; code: string }
  message: string
}

function transformAnalyticsResponse<T>(
  response: AnalyticsResponse<T>,
  tableName?: string
): DataOrErrors<T> {
  if (response.errors) {
    return {
      errors: [...response.errors],
      data: null,
    }
  } else if (response.data) {
    return {
      errors: null,
      // @ts-ignore property accessor syntax breaks the code here
      data: tableName ? response.data[tableName] : response.data,
    }
  } else {
    return {
      errors: null,
      data: null,
    }
  }
}

interface ZeusGqlResponse<T> {
  errors?: {message: string}[]
  [key: string]: T[] | {message: string}[] | undefined
}

export const newPostQueryToAnalyticsApi = async <T>(
  query: Object,
  tableName?: string
): Promise<DataOrErrors<T>> => {
  const gqlResponse: ZeusGqlResponse<T> = await Gql.query(query)
  if (gqlResponse.errors) {
    return {
      errors: [...gqlResponse.errors],
      data: null,
    }
  } else {
    return {
      errors: null,
      // @ts-ignore property accessor syntax breaks the code here
      data: tableName ? gqlResponse[tableName] : gqlResponse,
    }
  }
}

export const postQueryToAnalyticsApi = async <T>(
  query: string,
  tableName?: string
): Promise<DataOrErrors<T>> => {
  const body = JSON.stringify({
    query,
    variables: null,
  })
  const headers = {
    'Content-type': 'application/json; charset=UTF-8',
    Accept: '*/*',
  }
  return postWithFetch<AnalyticsResponse<T>>(
    Config.DIEMX_GRAPHQL_URL + '/v1/graphql',
    body,
    headers
  )
    .then((response: AnalyticsResponse<T>) => {
      return transformAnalyticsResponse<T>(response, tableName)
    })
    .catch((error: FetchError) => {
      return { data: null, errors: [{ message: error.message }] }
    })
}
