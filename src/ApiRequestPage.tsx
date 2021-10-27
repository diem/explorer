import React, { ReactElement, useEffect, useState } from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { DataOrErrors, FetchError } from './FetchType'
import MainWrapper from './MainWrapper'

interface ApiRequestPageProps<T> {
  children: ReactElement;
  request: (...args: any[]) => Promise<DataOrErrors<T>>;
  args?: any[];
  loadingComponent?: ReactElement;
  errorComponent?: ReactElement;
}

function DefaultErrorComponent () {
  return (
    <MainWrapper>
      <span role="dialog" className="network-error">
        Something went wrong. Please try again later
      </span>
    </MainWrapper>
  )
}

function DefaultLoadingComponent () {
  return (
    <MainWrapper>
      <span className="loading" role="loading">
        Loading, please wait
      </span>
    </MainWrapper>
  )
}

function ApiRequestPage<T> ({
  request,
  args = [],
  children,
  loadingComponent = <DefaultLoadingComponent />,
  errorComponent = <DefaultErrorComponent />
}: ApiRequestPageProps<T>) {
  const [response, setResponse] = useState<T | undefined>(undefined)
  const [errors, setErrors] = useState<FetchError[] | null>([])
  const [loading, setLoading] = useState<boolean | undefined>(true)

  useEffect(() => {
    async function getResponse () {
      await request(...args).then((apiResponse) => {
        if (apiResponse.data) {
          setResponse(apiResponse.data)
          setLoading(false)
        } else {
          setErrors(apiResponse.errors)
          setLoading(false)
        }
      })
    }

    getResponse()
  }, [])

  function renderContent (): ReactJSXElement {
    if (loading) {
      return <>{React.cloneElement(loadingComponent)}</>
    } else if (errors && errors.length) {
      console.error('Error loading the ApiRequestPage: ', errors)
      return <>{React.cloneElement(errorComponent, { errors })}</>
    } else {
      return <>{React.cloneElement(children, { data: response })}</>
    }
  }

  return renderContent()
}

export default ApiRequestPage
