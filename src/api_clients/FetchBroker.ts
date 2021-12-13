import fetch from 'isomorphic-fetch'
import { Err, Ok, Result } from 'ts-results'

export enum ResponseError {
  NOT_FOUND = "Not found",
  UNHANDLED = "Unhandled"
}

const toResult = async <T>(promise: Promise<T>): Promise<Result<T, ResponseError>> =>
  await promise
    .then((response) => Ok(response))
    .catch(() => Err(ResponseError.UNHANDLED))

const performFetch = async <T>(
  url: string,
  request: { method: string; body?: string; headers: any }
): Promise<Result<T, ResponseError>> => {
  const handleResponse = (response: Response): Promise<Result<T, ResponseError>> => {
    if (!response.ok) {
      switch (response.status) {
        case 404:
          return Promise.resolve(Err(ResponseError.NOT_FOUND))
        default:
          return Promise.resolve(Err(ResponseError.UNHANDLED))
      }
    } else {
      return response.json().then((result) => Ok(result))
    }
  }

  const result = await toResult(fetch(url, request))
  return result.ok ? handleResponse(result.val) : result
}

export async function getWithFetch<T>(url: string, headers: any): Promise<Result<T, ResponseError>> {
  return await performFetch(url, {
    method: 'GET',
    headers,
  })
}
