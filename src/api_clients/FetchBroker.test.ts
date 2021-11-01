import {
  setGetNetworkErrorForUrl,
  setGetResponseForUrl,
  setPostNetworkErrorForUrl,
  setPostResponseForUrl,
  setupIntegrationTestApiServer
} from '../../test_utils/IntegrationTestApiServerTools'
import { getWithFetch, postWithFetch } from './FetchBroker'

const server = setupIntegrationTestApiServer()
const fakeUrl = 'http://localhost/fake_url'

const setPostResponse = (response: any) => setPostResponseForUrl(server, fakeUrl, response)
const setGetResponse = (response: any) => setGetResponseForUrl(server, fakeUrl, response)
const setPostNetworkError = (error: string) => setPostNetworkErrorForUrl(server, fakeUrl, error)
const setGetNetworkError = (error: string) => setGetNetworkErrorForUrl(server, fakeUrl, error)

describe('Fetch Broker', function () {
  describe('postWithFetch', function () {
    it('should call .json before returning', async function () {
      const goodResponse = 'this is good data'
      const expected = 'this is good data'
      setPostResponse(goodResponse)

      const result = await postWithFetch(fakeUrl, "doesn't matter since we're mocking the service workers", { headers: "don't matter since we're mocking the service workers" })

      expect(result).toEqual(expected)
    })

    it('should pass network errors as failed promises', async function () {
      const error = 'The internet went boom 💥'
      const expected = {
        message: `request to http://localhost/fake_url failed, reason: ${error}`,
        type: 'system'
      }
      setPostNetworkError(error)

      await postWithFetch(fakeUrl, "doesn't matter since we're mocking the service workers", { headers: "don't matter since we're mocking the service workers" })
        .catch(thrownError => {
          expect(thrownError).toEqual(expected)
        })
    })
  })
  describe('getWithFetch', function () {
    it('should call .json before returning', async function () {
      const goodResponse = 'this is good data'
      const expected = 'this is good data'
      setGetResponse(goodResponse)

      const result = await getWithFetch(fakeUrl, { headers: "don't matter since we're mocking the service workers" })

      expect(result).toEqual(expected)
    })

    it('should pass network errors as failed promises', async function () {
      const error = 'The internet went boom 💥'
      const expectedMessage = `request to ${fakeUrl} failed, reason: ${error}`
      setGetNetworkError(error)

      await getWithFetch(fakeUrl, { headers: "don't matter since we're mocking the service workers" })
        .catch(thrownError => {
          expect(thrownError.message).toEqual(expectedMessage)
        })
    })
  })
})
