import { ResponseErrorType } from './FetchBroker'
import { Result } from 'ts-results'

export type FetchError = {
  message: string
  type?: string
  code?: number
}

export function isNotFound<T>(result: Result<T, FetchError[]>): boolean {
  if (!('err' in result)) return false
  else if (!Array.isArray(result.val)) return false
  return result.val.some(
    (error) => error?.message === ResponseErrorType.NOT_FOUND
  )
}
