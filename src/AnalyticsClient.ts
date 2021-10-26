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

function transformAnalyticsResponse<T> (response: AnalyticsResponse<T>) : DataOrErrors<T> {
  if (response.errors) {
    return {
      data: null,
      errors: response.errors
    }
  } else {
    return {
      data: response.data ? response.data : null,
      errors: null
    }
  }
}

export const postQueryToAnalyticsApi = async <T> (query: string): Promise<DataOrErrors<T>> => {
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
      return transformAnalyticsResponse<T>(response)
    }).catch((error) => {
      return { data: null, errors: [{ message: error.message }] }
    })
}
