import { ResponseError } from './FetchBroker'

export type FetchError = {
  message: string
  type?: string
  code?: number
}

export type DataOrErrors<T, R = FetchError[]> = { data: T } | { errors: R }

export function isNotFound<T, R>(dataOrError: DataOrErrors<T, R>): boolean {
  if (!('errors' in dataOrError)) return false
  if (!Array.isArray(dataOrError.errors)) return false
  return dataOrError.errors.some(
    (error) => error?.message === ResponseError.NOT_FOUND
  )
}
