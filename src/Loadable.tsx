import { DataOrErrors } from './api_clients/FetchTypes'
import React, { ReactElement } from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import {
  PlainErrorComponent,
  PlainLoadingComponent,
} from './ApiRequestComponent'

export type LoadingState<T> = DataOrErrors<T> | { isLoading: true }

type LoadableProps<T> = {
  state: LoadingState<T>
  children: ReactElement
  loadingComponent?: ReactElement
  errorComponent?: ReactElement
}

export default function Loadable<T>({
  state,
  loadingComponent = <PlainLoadingComponent />,
  errorComponent = <PlainErrorComponent />,
  children,
}: LoadableProps<T>): ReactJSXElement {
  if (!state) return errorComponent
  else if ('isLoading' in state) return loadingComponent
  else if ('errors' in state)
    return React.cloneElement(errorComponent, { errors: state.errors })
  else if (children) return React.cloneElement(children, { data: state.data })
  return errorComponent
}
