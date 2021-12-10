import {
  setGetNetworkErrorForUrl,
  setGetResponseForUrl,
  setPostNetworkErrorForUrl,
  setPostResponseForUrl,
  setupIntegrationTestApiServer,
} from '../test_utils/IntegrationTestApiServerTools'
import { getWithFetch, postWithFetch } from './FetchBroker'

const server = setupIntegrationTestApiServer()
const fakeUrl = 'http://localhost/fake_url'

const setPostResponse = (response: any, options = {}) =>
  setPostResponseForUrl(server, fakeUrl, response, options)
const setGetResponse = (response: any, options = {}) =>
  setGetResponseForUrl(server, fakeUrl, response, options)
const setPostNetworkError = (error: string) =>
  setPostNetworkErrorForUrl(server, fakeUrl, error)
const setGetNetworkError = (error: string) =>
  setGetNetworkErrorForUrl(server, fakeUrl, error)

describe('Fetch Broker', function () {
  describe('postWithFetch', function () {
    it('should call .json before returning', async function () {
      const goodResponse = 'this is good data'
      const expected = 'this is good data'
      setPostResponse(goodResponse)

      const result = await postWithFetch(
        fakeUrl,
        "doesn't matter since we're mocking the service workers",
        { headers: "don't matter since we're mocking the service workers" }
      )

      expect(result).toEqual(expected)
    })

    it('should pass network errors as failed promises', async function () {
      const error = 'The internet went boom 💥'
      const expected = {
        message: `request to http://localhost/fake_url failed, reason: ${error}`,
        type: 'system',
      }
      setPostNetworkError(error)

      await postWithFetch(
        fakeUrl,
        "doesn't matter since we're mocking the service workers",
        { headers: "don't matter since we're mocking the service workers" }
      ).catch((thrownError) => {
        expect(thrownError).toEqual(expected)
      })
    })

    it('should pass any response from the API up as failed promises', async () => {
      setPostResponse({ ok: false }, {status: 404})

      await postWithFetch(
        fakeUrl,
        "doesn't matter since we're mocking the service workers",
        { headers: "don't matter since we're mocking the service workers" }
      ).catch((thrownError) => {
        expect(thrownError.message).toEqual("Not Found")
      })
    })
  })
  describe('getWithFetch', function () {
    it('should call .json before returning', async function () {
      const goodResponse = 'this is good data'
      const expected = 'this is good data'
      setGetResponse(goodResponse)

      const result = await getWithFetch(fakeUrl, {
        headers: "don't matter since we're mocking the service workers",
      })

      expect(result).toEqual(expected)
    })

    it('should pass network errors as failed promises', async function () {
      const error = 'The internet went boom 💥'
      const expectedMessage = `request to ${fakeUrl} failed, reason: ${error}`
      setGetNetworkError(error)

      await getWithFetch(fakeUrl, {
        headers: "don't matter since we're mocking the service workers",
      }).catch((thrownError) => {
        expect(thrownError.message).toEqual(expectedMessage)
      })
    })
    it('should pass any response from the API up as failed promises', async () => {
      setGetResponse({ ok: false }, {status: 404})

      await getWithFetch(
        fakeUrl,
        { headers: "don't matter since we're mocking the service workers" }
      ).catch((thrownError) => {
        expect(thrownError.message).toEqual("Not Found")
      })
    })
  })
})
