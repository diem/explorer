export type FetchError = {
  message: string
  type?: string
  code?: number
}

export type DataOrErrors<T, R = FetchError[]> = { data: T } | { errors: R }
