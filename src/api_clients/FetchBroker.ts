import { FetchResponse } from './FetchTypes'
import fetch from 'isomorphic-fetch'

function transformHttpErrorsIntoFailedPromise<T>(
  response: FetchResponse<T>
): FetchResponse<T> {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

async function performFetch<T>(
  url: string,
  request: { method: string; body?: string; headers: any }
): Promise<T> {
  return await fetch(url, request)
    .then((responseOrErrors: Response) => {
      return transformHttpErrorsIntoFailedPromise(responseOrErrors)
    })
    .then((response: FetchResponse<Promise<T>>) => {
      return response.json()
    })
}

export async function getWithFetch<T>(url: string, headers: any): Promise<T> {
  return await performFetch(url, {
    method: 'GET',
    headers,
  })
}

export async function postWithFetch<T>(
  url: string,
  body: string,
  headers: any
): Promise<T> {
  return await performFetch(url, {
    method: 'POST',
    body,
    headers,
  })
}
