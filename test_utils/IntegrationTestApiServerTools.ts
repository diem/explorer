import { setupServer, SetupServerApi } from 'msw/node'
import { rest } from 'msw'
import Config from '../src/config.json'

export function setAnalyticsApiResponse (server: SetupServerApi, responseData: Object, delay: number = 0) {
  server.use(
    rest.post('http://localhost:8888/v1/graphql', (req, res, ctx) => {
      return res(
        ctx.delay(delay),
        ctx.json(responseData)
      )
    })
  )
}

export function setAnalyticsNetworkError (server: SetupServerApi, errorText: string) {
  server.use(
    rest.post('http://localhost:8888/v1/graphql', (req, res, ctx) => {
      return res.networkError(errorText)
    })
  )
}

export function setBlockchainApiResponse (server: SetupServerApi, responseData: Object, delay: number = 0) {
  server.use(
    rest.post(Config.DIEMX_BLOCKCHAIN_URL, (req, res, ctx) => {
      return res(
        ctx.delay(delay),
        ctx.json(responseData)
      )
    })
  )
}

export function setBlockchainNetworkError (server: SetupServerApi, errorText: string) {
  server.use(
    rest.post(Config.DIEMX_BLOCKCHAIN_URL, (req, res, ctx) => {
      return res.networkError(errorText)
    })
  )
}

export function setupIntegrationTestApiServer (): SetupServerApi {
  const server = setupServer()
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  return server
}
