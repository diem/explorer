import { transactionsBySenderAddressQuery } from './AnalyticsQueries'

describe('Queries with addresses', () => {
  it('should canonicalize the address before returning the query', async () => {
    expect(
      transactionsBySenderAddressQuery('0x1').transactions![0].where!.sender._eq
    ).toEqual('00000000000000000000000000000001')
  })
  it('should return an error if the address is invalid', async () => {
    expect(
      transactionsBySenderAddressQuery('this is an invalid address')
    ).toEqual({
      error:
        'getCanonicalAddress received Invalid address type : this is an invalid address',
    })
  })
})
