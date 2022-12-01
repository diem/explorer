// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import fetch from 'isomorphic-fetch'
import { Err, Ok, Result } from 'ts-results'

export enum ResponseErrorType {
  NOT_FOUND = 'Not found',
  UNHANDLED = 'Unhandled',
}

export type ResponseError =
  | { type: ResponseErrorType.NOT_FOUND }
  | { type: ResponseErrorType.UNHANDLED; message: string }

const toResult = async <T>(
  promise: Promise<T>
): Promise<Result<T, ResponseError>> =>
  await promise
    .then((response) => Ok(response))
    .catch((error) =>
      Err({ type: ResponseErrorType.UNHANDLED, message: error.toString() })
    )

/* const axiosPerformFetch = async <T>(
  url: string, body: string,
  request: { method: string; headers: any }
) => {
  const axiosHandleResponse = (
    response: any
  ): Promise<Result<T, ResponseError>> => {
    console.log("response", response);
    if (!response.data) {
      switch (response.status) {
        case 404:
          return Promise.resolve(Err({ type: ResponseErrorType.NOT_FOUND }))
        default:
          return Promise.resolve(
            Err({
              type: ResponseErrorType.UNHANDLED,
              message: `request to ${url} failed, reason: ${response.statusText}`,
            })
          )
      }
    } else {
      return response.data //response.then((result: any) => Ok(response.data))
    }
  }


  const result = await toResult(axios.post<any>(url, body, {
    headers: {
      'Content-Type': 'application/json',
    }
  }))

  return result.ok ? axiosHandleResponse(result.val) : result
} */
const performFetch = async <T>(
  url: string,
  request: { method: string; body?: string; headers: any }
): Promise<Result<T, ResponseError>> => {
  const handleResponse = (
    response: Response
  ): Promise<Result<T, ResponseError>> => {
    if (!response.ok) {
      switch (response.status) {
        case 404:
          return Promise.resolve(Err({ type: ResponseErrorType.NOT_FOUND }))
        default:
          return Promise.resolve(
            Err({
              type: ResponseErrorType.UNHANDLED,
              message: `request to ${url} failed, reason: ${response.statusText}`,
            })
          )
      }
    } else {
      return response.json().then((result) => Ok(result))
    }
  }

  const result = await toResult(fetch(url, request))
  return result.ok ? handleResponse(result.val) : result
}

const performFetchIso = async <T>(
  url: string,
  request: { method: string; headers: any, body: any }
): Promise<Result<T, ResponseError>> => {
  const handleResponse = (
    response: Response
  ): Promise<Result<T, ResponseError>> => {
    if (!response.ok) {
      switch (response.status) {
        case 404:
          return Promise.resolve(Err({ type: ResponseErrorType.NOT_FOUND }))
        default:
          return Promise.resolve(
            Err({
              type: ResponseErrorType.UNHANDLED,
              message: `request to ${url} failed, reason: ${response.statusText}`,
            })
          )
      }
    } else {
      return response.json().then((result) => {
        return Ok(result)
      })
    }
  }

  const result = await toResult(fetch(url, request))

  return result.ok ? handleResponse(result.val) : result
}

export async function getWithFetch<T>(
  url: string,
  headers: any
): Promise<Result<T, ResponseError>> {
  /* console.log("headers", headers) */
  return await performFetch(url, {
    method: 'GET',
    headers,
  })
}

export async function getWithFetchIso<T>(
  url: string,
  request: any
): Promise<Result<T, ResponseError>> {
  return await performFetchIso(url, request)
}
