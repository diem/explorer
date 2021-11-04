import { setupServer, SetupServerApi } from 'msw/node'
import { rest } from 'msw'
import Config from '../src/config.json'

export function setPostResponseForUrl(server: SetupServerApi, url: string, responseData: Object, delay: number = 0) {
  server.use(
    rest.post(url, (req, res, ctx) => {
      return res(
        ctx.delay(delay),
        ctx.json(responseData)
      )
    })
  )
}
export function setGetResponseForUrl(server: SetupServerApi, url: string, responseData: Object, delay: number = 0) {
  server.use(
    rest.get(url, (req, res, ctx) => {
      return res(
        ctx.delay(delay),
        ctx.json(responseData)
      )
    })
  )
}

export function setPostNetworkErrorForUrl(server: SetupServerApi, url: string, errorText: string) {
  server.use(
    rest.post(url, (req, res, ctx) => {
      return res.networkError(errorText)
    })
  )
} export function setGetNetworkErrorForUrl(server: SetupServerApi, url: string, errorText: string) {
  server.use(
    rest.get(url, (req, res, ctx) => {
      return res.networkError(errorText)
    })
  )
}
export function setAnalyticsApiResponse (server: SetupServerApi, responseData: Object, delay: number = 0) {
  setPostResponseForUrl(server, 'http://localhost:8888/v1/graphql', responseData)
}

export function setAnalyticsNetworkError (server: SetupServerApi, errorText: string) {
  setPostNetworkErrorForUrl(server, 'http://localhost:8888/v1/graphql', errorText)
}

export function setJsonRpcBlockchainApiResponse (server: SetupServerApi, responseData: Object, delay: number = 0) {
  setPostResponseForUrl(server, Config.DIEMX_BLOCKCHAIN_JSON_RPC_URL, responseData)
}

export function setBlockchainJsonRpcNetworkError(server: SetupServerApi, errorText: string) {
  setPostNetworkErrorForUrl(server, Config.DIEMX_BLOCKCHAIN_JSON_RPC_URL, errorText)
}

export function setBlockchainRestApiResponse (server: SetupServerApi, path: string, responseData: Object, delay: number = 0) {
  setGetResponseForUrl(server, import.meta.env.VITE_BLOCKCHAIN_REST_URL + path, responseData)
}

export function setBlockchainRestNetworkError(server: SetupServerApi, path: string, errorText: string) {
  setGetNetworkErrorForUrl(server, import.meta.env.VITE_BLOCKCHAIN_REST_URL + path, errorText)
}

export function setupIntegrationTestApiServer (): SetupServerApi {
  const server = setupServer()
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  return server
}
