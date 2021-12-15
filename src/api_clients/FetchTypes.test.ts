import { FetchError, isNotFound } from './FetchTypes'
import { Err, Ok, Result } from 'ts-results'
import { ResponseErrorType } from './FetchBroker'

describe('isNotFound', () => {
  it('should return true if given not found error', () => {
    expect(
      isNotFound(Err([{ message: ResponseErrorType.NOT_FOUND }]))
    ).toBeTruthy()
  })

  it('should return false if anything else', () => {
    const subjects: Result<any, FetchError[]>[] = [
      Err([{ message: ResponseErrorType.UNHANDLED }]),
      Ok({ message: 'Not Found' }),
      Ok({ message: 'Too cold' }),
    ]

    for (const subject of subjects) expect(isNotFound(subject)).toBeFalsy()
  })
})
