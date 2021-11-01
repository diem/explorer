import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import { act, render, screen, waitFor } from '@testing-library/react'
import ApiRequestPage from './ApiRequestPage'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const childComponentText = 'The data loaded and it was this: '
const childComponentRole = 'main'
const data = '|THIS|IS|DATA|'
const ChildComponent = (props: { data: string | undefined }) => {
  return (
    <div role={childComponentRole}>
      {childComponentText}
      {props.data}
    </div>
  )
}
const loadingComponentText = 'The thing is loading'
const loadingComponentRole = 'note'

const errorComponentText = 'There was an error and it was this: '
const errorComponentRole = 'alert'
const error =
  'THIS IS A GOOD ERROR, IF YOU SEE THIS IN THE CONSOLE IT MEANS A TEST MANIFESTED AN ERROR AND THE CODE PRINTED IT. THIS IS THE CORRECT BEHAVIOR'
const ErrorComponent = (props: { errors: string[] }) => {
  return (
    <div role={errorComponentRole}>
      {errorComponentText}
      {props.errors.join('')}
    </div>
  )
}
const mockRequest = jest.fn()
const mockArgs = [{ arg: 'value' }]

function renderSubject(args: any[] | undefined) {
  render(
    <BrowserRouter>
      <ApiRequestPage
        request={mockRequest}
        args={args}
        loadingComponent={
          <div role={loadingComponentRole}>{loadingComponentText}</div>
        }
        errorComponent={<ErrorComponent errors={[]} />}
      >
        <ChildComponent data={undefined} />
      </ApiRequestPage>
    </BrowserRouter>
  )
}

let resolveApiPromise: (value?: unknown) => void

beforeEach(() => {
  mockRequest.mockReset()
  const apiPromise = new Promise((resolve) => {
    resolveApiPromise = resolve
  })
  mockRequest.mockImplementation(() => apiPromise)
})

describe('ApiRequestPage', () => {
  describe('Passing Arguments', function () {
    it('should pass each argument separately', function () {
      const myArgs = [1, 'bananas', { deeply: { nested: { object: true } } }]
      renderSubject(myArgs)
      expect(mockRequest).toHaveBeenCalledWith(myArgs[0], myArgs[1], myArgs[2])
    })
    it('should pass no arguments if args is undefined', function () {
      renderSubject(undefined)
      expect(mockRequest).toHaveBeenCalledWith()
    })
  })
  describe('Before Fetch Promise Resolves or Rejects', function () {
    beforeEach(() => {
      renderSubject(mockArgs)
    })
    it('should display a loading message before api responds', async function () {
      expect(
        (await waitFor(() => screen.getByRole(loadingComponentRole)))
          .textContent
      ).toContain(loadingComponentText)
      expect(screen.queryByRole(childComponentRole)).not.toBeInTheDocument()
    })
  })

  describe('After the Fetch Promise Resolves', function () {
    beforeEach(() => {
      renderSubject(mockArgs)
    })
    it('should render children with data if no errors', async () => {
      act(() => {
        resolveApiPromise({ data })
      })

      await waitFor(() => screen.getByRole(childComponentRole))
      expect(mockRequest).toHaveBeenCalledWith(mockArgs[0])
      expect(screen.getByRole(childComponentRole).textContent).toContain(
        childComponentText
      )
      expect(screen.getByRole(childComponentRole).textContent).toContain(data)
      expect(screen.queryByRole(loadingComponentRole)).not.toBeInTheDocument()
      expect(screen.queryByRole(errorComponentRole)).not.toBeInTheDocument()
    })

    it('should render errorComponent with errors if there are errors', async () => {
      act(() => {
        resolveApiPromise({ errors: [error] })
      })

      await waitFor(() => screen.getByRole(errorComponentRole))
      expect(mockRequest).toHaveBeenCalledWith(mockArgs[0])
      expect(screen.getByRole(errorComponentRole).textContent).toContain(
        errorComponentText
      )
      expect(screen.getByRole(errorComponentRole).textContent).toContain(error)
      expect(screen.queryByRole(loadingComponentRole)).not.toBeInTheDocument()
      expect(screen.queryByRole(childComponentRole)).not.toBeInTheDocument()
    })
  })
})
