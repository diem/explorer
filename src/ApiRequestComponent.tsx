// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import React, { ReactElement, useEffect, useState } from 'react'
import MainWrapper from './MainWrapper'
import { Card, Spinner } from 'react-bootstrap'
import Loadable, { LoadingState } from './Loadable'
import { Result } from 'ts-results'
import { ResponseError } from './api_clients/FetchBroker'

interface ApiRequestComponentProps<T, E> {
  children: ReactElement<{ data: T }>
  request: (...args: any[]) => Promise<Result<T, E>>
  args?: any[]
  loadingComponent?: ReactElement
  errorComponent?: ReactElement<{ errors?: E }>
  refresh?: any
}

export interface ErrorComponentProps<E> {
  errors: E
}

export function PlainValue<T>({ data }: { data?: T }) {
  return data === undefined ? <></> : <>{`${data}`}</>
}

export function PlainErrorComponent(props?: any) {
  const { errMsg } = props
  return (
    <p role='dialog' className='network-error'>
      {errMsg || "Something went wrong. Please try again later"}
    </p>
  )
}

export const FullPageErrorComponent = () => (
  <MainWrapper>
    <PlainErrorComponent />
  </MainWrapper>
)
export const ErrorCardComponent = ({ title = '' }: { title?: string }) => (
  <>
    <Card.Header>{title}</Card.Header>
    <Card.Body>
      <PlainErrorComponent />
    </Card.Body>
  </>
)

const DefaultErrorComponent = FullPageErrorComponent


export function PlainLoadingComponent({ styles = { width: "2rem", height: "2rem" }, lgLogo = false }: { styles?: any, lgLogo?: boolean }) {
  return (
    <span className={`loading d-flex justify-content-center ${lgLogo ? "loader-center-styles" : ""}`} role='loading'>
      {/*  Loading, please wait */}
      <Spinner animation="border" role="status" style={styles}>
        <span className="visually-hidden">Loading, please wait</span>
      </Spinner>
    </span>
  )
}

export const FullPageLoadingComponent = () => (
  <div className="loader-center-styles">
    <PlainLoadingComponent styles={{ width: "4rem", height: "4rem" }} lgLogo={true} />
  </div>
)

export const LoadingCardComponent = ({ title = '' }: { title?: string }) => (
  <>
    <Card.Header>{title}</Card.Header>
    <Card.Body>
      <PlainLoadingComponent />
    </Card.Body>
  </>
)

const DefaultLoadingComponent = FullPageLoadingComponent

function ApiRequestComponent<T, E = ResponseError>({
  request,
  args = [],
  children,
  loadingComponent = <DefaultLoadingComponent />,
  errorComponent = <DefaultErrorComponent />,
  refresh
}: ApiRequestComponentProps<T, E>) {
  const [loadingState, setLoadingState] = useState<LoadingState<T, E>>({
    isLoading: true,
  })
  useEffect(() => {
    async function getResponse() {
      await request(...args).then((apiResponse) => setLoadingState(apiResponse))
    }
    getResponse()
  }, [refresh])

  return (
    <Loadable
      state={loadingState}
      loadingComponent={loadingComponent}
      errorComponent={errorComponent}
    >
      {children}
    </Loadable>
  )
}

export default ApiRequestComponent
