import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import { render, screen } from '@testing-library/react'
import { AccountAddress, AccountAddressProps, TransactionVersion, TxnVersionProps } from './Link'
import { BrowserRouter } from 'react-router-dom'
import { getCanonicalAddress } from '../utils'
import { Err, Ok } from 'ts-results'

jest.mock('../utils', () => ({
  ...jest.requireActual('../utils'),
  getCanonicalAddress: jest.fn(),
}))

describe('TransactionVersion', function () {
  const renderSubject = (props: TxnVersionProps) => render(<BrowserRouter><TransactionVersion {...props}/></BrowserRouter>)
  it('should return empty if no value is passed', async () => {
    renderSubject({})
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
  it('should tolerate strings', async () => {
    renderSubject({ value: '12345' })
    expect(screen.queryByRole('link')).toBeInTheDocument()
  })
  it('should tolerate numbers', async () => {
    renderSubject({ value: 12345 })
    expect(screen.queryByRole('link')).toBeInTheDocument()
  })
  it('should not perform any sort of validation (yet)', async () => {
    renderSubject({ value: "You'll render pretty much anything but undefined 🤷" })
    expect(screen.queryByRole('link')).toBeInTheDocument()
  })
})

describe('AccountAddress', function () {
  const renderSubject = (value: AccountAddressProps['value']) => render(<BrowserRouter><AccountAddress value={value}/></BrowserRouter>)
  it('should return empty if value is empty string', async () => {
    renderSubject('')
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
  it('should return empty if value is null', async () => {
    renderSubject(null)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
  it('should return the error if the address fails validation', async () => {
    const mockResult = Err('this address is bad because reasons')
    // @ts-ignore TS is bad at mocking
    getCanonicalAddress.mockReturnValueOnce(mockResult)

    renderSubject('someAddress')

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.queryByText(mockResult.val)).toBeInTheDocument()
  })
  it('should display link if address passes validation', async () => {
    // @ts-ignore TS is bad at mocking
    getCanonicalAddress.mockResolvedValue(Ok('0000000000000000000000000b1e55ed'))

    renderSubject('0xB1E55ED')

    expect(screen.queryByRole('link')).toBeInTheDocument()
  })
})
