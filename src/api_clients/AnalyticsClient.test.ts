// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import { postQueryToAnalyticsApi } from './AnalyticsClient'
import {
  setAnalyticsApiResponse,
  setAnalyticsNetworkError,
  setupIntegrationTestApiServer,
} from '../test_utils/IntegrationTestApiServerTools'
import { Err, Ok } from 'ts-results'

const server = setupIntegrationTestApiServer()

describe('Analytics Client', function () {
  it('should call .json before then getting the data out of the data key before returning', async function () {
    const goodAnalyticsResponse = { data: { key: 'any string we want here' } }
    const expected = Ok(goodAnalyticsResponse.data.key)

    setAnalyticsApiResponse(server, goodAnalyticsResponse)

    const result = await postQueryToAnalyticsApi<string>(
      "the query doesn't matter since we're mocking the service workers (msw)",
      'key'
    )
    expect(result).toEqual(expected)
  })

  it('should pass errors through', async function () {
    const badAnalyticsResponse = {
      errors: [{ message: 'This is a good error !!' }],
    }
    const expected = Err([badAnalyticsResponse.errors[0].message])

    setAnalyticsApiResponse(server, badAnalyticsResponse)

    const result = await postQueryToAnalyticsApi(
      "the query doesn't matter since we're mocking the service workers (msw)",
      '_'
    )
    expect(result).toEqual(expected)
  })

  it('should pass network errors through like any other error', async function () {
    const error = 'The internet went boom 💥'
    const expected = Err([
      `request to http://localhost:8888/v1/graphql failed, reason: ${error}`,
    ])

    setAnalyticsNetworkError(server, error)

    const result = await postQueryToAnalyticsApi(
      "the query doesn't matter since we're mocking the service workers (msw)",
      '_'
    )
    expect(result).toEqual(expected)
  })
})
