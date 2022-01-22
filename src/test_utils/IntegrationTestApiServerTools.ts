// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import { setupServer, SetupServerApi } from 'msw/node'
import { rest } from 'msw'

export function setPostResponseForUrl(
  server: SetupServerApi,
  url: string,
  responseData: Object,
  options?: {
    delay?: number
    status?: number
  }
) {
  server.use(
    rest.post(url, (req, res, ctx) => {
      const delay = options?.delay || 0
      const status = options?.status || 200

      return res(ctx.status(status), ctx.delay(delay), ctx.json(responseData))
    })
  )
}
export function setGetResponseForUrl(
  server: SetupServerApi,
  url: string,
  responseData: Object,
  options?: {
    delay?: number
    status?: number
  }
) {
  const delay = options?.delay || 0
  const status = options?.status || 200

  server.use(
    rest.get(url, (req, res, ctx) => {
      return res(ctx.status(status), ctx.delay(delay), ctx.json(responseData))
    })
  )
}

export function setPostNetworkErrorForUrl(
  server: SetupServerApi,
  url: string,
  errorText: string
) {
  server.use(
    rest.post(url, (req, res, _ctx) => {
      return res.networkError(errorText)
    })
  )
}
export function setGetNetworkErrorForUrl(
  server: SetupServerApi,
  url: string,
  errorText: string
) {
  server.use(
    rest.get(url, (req, res, _ctx) => {
      return res.networkError(errorText)
    })
  )
}
export function setAnalyticsApiResponse(
  server: SetupServerApi,
  responseData: Object
) {
  setPostResponseForUrl(
    server,
    'http://localhost:8888/v1/graphql',
    responseData
  )
}

export function setAnalyticsNetworkError(
  server: SetupServerApi,
  errorText: string
) {
  setPostNetworkErrorForUrl(
    server,
    'http://localhost:8888/v1/graphql',
    errorText
  )
}

export function setBlockchainRestApiResponse(
  server: SetupServerApi,
  path: string,
  responseData: Object,
  options?: {
    delay?: number
    status?: number
  }
) {
  setGetResponseForUrl(
    server,
    import.meta.env.VITE_BLOCKCHAIN_REST_URL + path,
    responseData,
    options
  )
}

export function setBlockchainRestNetworkError(
  server: SetupServerApi,
  path: string,
  error: any
) {
  setGetNetworkErrorForUrl(
    server,
    import.meta.env.VITE_BLOCKCHAIN_REST_URL + path,
    error
  )
}

export function setupIntegrationTestApiServer(): SetupServerApi {
  const server = setupServer()
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  return server
}
