export type FetchResponse<T> = {
  statusText: string
  json: () => T
  ok: boolean
}
export type FetchError = {
  message: string
  type?: string
  code?: number
}

export type DataOrErrors<T, R = FetchError[]> = { data: T } | { errors: R }
