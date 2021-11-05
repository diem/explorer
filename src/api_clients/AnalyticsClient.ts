import Config from '../config.json'
import { postWithFetch } from './FetchBroker'
import { DataOrErrors, FetchError } from './FetchTypes'

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
