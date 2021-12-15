import React, { ReactElement } from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import {
  PlainErrorComponent,
  PlainLoadingComponent,
} from './ApiRequestComponent'
import { Result } from 'ts-results'

export type LoadingState<T, E> = Result<T, E> | { isLoading: true }

type LoadableProps<T, E> = {
  state: LoadingState<T, E>
  children: ReactElement<{ data: T }>
  loadingComponent?: ReactElement
  errorComponent?: ReactElement<{ errors?: E }>
}

export default function Loadable<T, E>({
  state,
  loadingComponent = <PlainLoadingComponent />,
  errorComponent = <PlainErrorComponent />,
  children,
}: LoadableProps<T, E>): ReactJSXElement {
  if (!state) return errorComponent
  else if ('isLoading' in state) return loadingComponent
  else if (state.err)
    return React.cloneElement(errorComponent, { errors: state.val })
  else if (children) return React.cloneElement(children, { data: state.val })
  else return errorComponent
}
