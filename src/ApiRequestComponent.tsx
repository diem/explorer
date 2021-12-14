import React, { ReactElement, useEffect, useState } from 'react'
import MainWrapper from './MainWrapper'
import { DataOrErrors } from './api_clients/FetchTypes'
import { Card } from 'react-bootstrap'
import Loadable, { LoadingState } from './Loadable'

interface ApiRequestPageProps<T> {
  children: ReactElement
  request: (...args: any[]) => Promise<DataOrErrors<T>>
  args?: any[]
  loadingComponent?: ReactElement
  errorComponent?: ReactElement
}

export function PlainValue<T>({ data }: { data?: T }) {
  return data === undefined ? <></> : <>{`${data}`}</>
}

export function PlainErrorComponent() {
  return (
    <span role='dialog' className='network-error'>
      Something went wrong. Please try again later
    </span>
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

export function PlainLoadingComponent() {
  return (
    <span className='loading' role='loading'>
      Loading, please wait
    </span>
  )
}

export const FullPageLoadingComponent = () => (
  <MainWrapper>
    <PlainLoadingComponent />
  </MainWrapper>
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

function ApiRequestComponent<T>({
  request,
  args = [],
  children,
  loadingComponent = <DefaultLoadingComponent />,
  errorComponent = <DefaultErrorComponent />,
}: ApiRequestPageProps<T>) {
  const [loadingState, setLoadingState] = useState<LoadingState<T>>({
    isLoading: true,
  })

  useEffect(() => {
    async function getResponse() {
      await request(...args).then((apiResponse) => {
        setLoadingState(apiResponse)
      })
    }

    getResponse()
  }, [])

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
