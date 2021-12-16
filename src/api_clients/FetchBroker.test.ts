import {
  setGetNetworkErrorForUrl,
  setGetResponseForUrl,
  setupIntegrationTestApiServer,
} from '../test_utils/IntegrationTestApiServerTools'
import { getWithFetch, ResponseErrorType } from './FetchBroker'
import { Err, Ok } from 'ts-results'

const server = setupIntegrationTestApiServer()
const fakeUrl = 'http://localhost/fake_url'

const setGetResponse = (response: any, options = {}) =>
  setGetResponseForUrl(server, fakeUrl, response, options)
const setGetNetworkError = (error: string) =>
  setGetNetworkErrorForUrl(server, fakeUrl, error)

describe('Fetch Broker', function () {
  describe('getWithFetch', function () {
    describe('when response returns an item', () => {
      it('should return a result containing the item', async function () {
        const goodResponse = 'this is good data'
        const expected = 'this is good data'
        setGetResponse(goodResponse)

        const result = await getWithFetch(fakeUrl, {
          headers: "don't matter since we're mocking the service workers",
        })

        expect(result).toEqual(Ok(expected))
      })
    })

    describe('when response returns a 404 status', () => {
      it('should return an error result "NOT_FOUND"', async () => {
        setGetResponse({ ok: false }, { status: 404 })

        const result = await getWithFetch(fakeUrl, {
          headers: "don't matter since we're mocking the service workers",
        })

        expect(result).toEqual(Err({ type: ResponseErrorType.NOT_FOUND }))
      })
    })

    describe('when response returns a non-404 status code', () => {
      it('should return an error result "UNHANDLED"', async function () {
        const errors = [
          {
            errorStatusCode: 400,
            statusText: `request to ${fakeUrl} failed, reason: bad request`,
          },
          {
            errorStatusCode: 500,
            statusText: `request to ${fakeUrl} failed, reason: internal server error`,
          },
        ]

        for (const { errorStatusCode, statusText } of errors) {
          setGetResponse(
            { ok: false },
            {
              status: errorStatusCode,
              statusText: statusText,
            }
          )

          const result = await getWithFetch(fakeUrl, {
            headers: "don't matter since we're mocking the service workers",
          })
          expect(result).toEqual(
            Err({
              type: ResponseErrorType.UNHANDLED,
              message: statusText,
            })
          )
        }
      })
    })

    describe('when api is unreachable', () => {
      it('should return an error result "UNHANDLED"', async function () {
        const error = 'The internet went boom 💥'
        const expectedMessage = `request to ${fakeUrl} failed, reason: ${error}`
        setGetNetworkError(error)

        const result = await getWithFetch(fakeUrl, {
          headers: "don't matter since we're mocking the service workers",
        })

        expect(result).toEqual(
          Err({
            type: ResponseErrorType.UNHANDLED,
            message: expectedMessage,
          })
        )
      })
    })
  })
})
