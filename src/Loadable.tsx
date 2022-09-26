// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import React, { ReactElement } from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import {
  PlainErrorComponent,
  PlainLoadingComponent,
} from './ApiRequestComponent'
import { Result } from 'ts-results'

export type LoadingState<T, E> = Result<T, E> | { isLoading: true, errMsg?: any }

type LoadableProps<T, E> = {
  state: LoadingState<T, E>
  children: ReactElement<{ data: T }>
  loadingComponent?: ReactElement
  errorComponent?: ReactElement<{ errors?: E, errMsg?: any }>
  errMsg?: String
}

export default function Loadable<T, E>({
  state,
  loadingComponent = <PlainLoadingComponent />,
  errorComponent = <PlainErrorComponent />,
  children,
  errMsg
}: LoadableProps<T, E>): ReactJSXElement {
  if (!state) return React.cloneElement(errorComponent, { errMsg: errMsg })
  else if ('isLoading' in state) return loadingComponent
  else if (state.err)
    return React.cloneElement(errorComponent, { errors: state.val, errMsg: errMsg })
  else if (children) return React.cloneElement(children, { data: state.val })
  else return errorComponent
}
