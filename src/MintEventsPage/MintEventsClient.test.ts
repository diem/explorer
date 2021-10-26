import { postQueryToAnalyticsApi } from '../AnalyticsClient'
import { getMintEvents } from './MintEventsClient'

jest.mock('../AnalyticsClient', () => ({
  ...jest.requireActual('../AnalyticsClient'),
  postQueryToAnalyticsApi: jest.fn(),
}))

describe('MintEventsClient', () => {
  it('should call the analytics client with a query', async () => {
    // @ts-ignore TS is bad at mocking
    postQueryToAnalyticsApi.mockResolvedValueOnce('_')
    await getMintEvents()
    expect(postQueryToAnalyticsApi).toHaveBeenCalled()
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith('query MyQuery {\n' +
        '  receivedmint_events(limit: 10, order_by: {transaction_version: desc}) {\n' +
        '    amount\n' +
        '    currency\n' +
        '    key\n' +
        '    receiver\n' +
        '    sequence_number\n' +
        '    transaction_version\n' +
        '  }\n' +
        '}')
  })
  it('should pass errors through', async function () {
    const analyticsResponse = {
      errors: [{ message: 'better luck next time' }],
      data: null
    }
    // @ts-ignore TS is bad at mocking
    postQueryToAnalyticsApi.mockResolvedValueOnce(analyticsResponse)
    const result = await getMintEvents()
    expect(result).toEqual(analyticsResponse)
  })
  it('should remove the recievedmint_events key from the data, but retain the value', async function () {
    const analyticsResponse = {
      errors: null,
      data: { receivedmint_events: ['the expected data goes here'] }
    }
    const expected = {
      errors: null,
      data: ['the expected data goes here']
    }
    // @ts-ignore TS is bad at mocking
    postQueryToAnalyticsApi.mockResolvedValueOnce(analyticsResponse)
    const result = await getMintEvents()
    expect(result).toEqual(expected)
  })
})
