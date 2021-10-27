import fetch from 'isomorphic-fetch'
import Config from './config.json'
import { DataOrErrors, FetchResponse } from './FetchType'

export type AnalyticsResponse<T> = {
  data: T | undefined,
  errors: AnalyticsError[] | undefined
};

export type AnalyticsError = {
  extensions : {path: string, code: string},
  message: string
}

function transformHttpErrorsIntoFailedPromise<T> (response: FetchResponse<T>) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

function transformAnalyticsResponse<T>(response: AnalyticsResponse<T>, dataKey: string): DataOrErrors<T> {
  if (response.errors) {
    return {
      errors: [...response.errors],
      data: null
    }
  } else if (response.data) {
    return {
      errors: null,
      // @ts-ignore property accessor syntax breaks the code here
      data: response.data[dataKey]
    }
  } else {
    return {
      errors: null,
      data: null
    }
  }
}

export const postQueryToAnalyticsApi = async <T> (query: string, dataKey: string): Promise<DataOrErrors<T>> => {
  return await fetch(Config.DIEMX_GRAPHQL_URL + '/v1/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query,
      variables: null,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: '*/*'
    }
  })
    .then((responseOrErrors: Response) => {
      return transformHttpErrorsIntoFailedPromise(responseOrErrors)
    })
    .then((response: FetchResponse<Promise<AnalyticsResponse<T>>>) => {
      return response.json()
    }).then((response: AnalyticsResponse<T>) => {
      return transformAnalyticsResponse<T>(response, dataKey)
    }).catch((error) => {
      return { data: null, errors: [{ message: error.message }] }
    })
}
