import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { postQueryToAnalyticsApi } from '../../../api_clients/AnalyticsClient'
import { top10AccountsQuery } from '../../../api_clients/AnalyticsQueries'
import Top10AccountsCard, { TopAccountEvent } from './Top10AccountsCard'

jest.mock('../../../api_clients/AnalyticsClient', () => ({
  postQueryToAnalyticsApi: jest.fn(),
}))

jest.useFakeTimers().setSystemTime(new Date('2021-01-01').getTime())

const renderSubject = async (
  accounts: TopAccountEvent[] = [],
) => {
  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi.mockResolvedValue({
    data: accounts,
  })

  render(<BrowserRouter>
    <Top10AccountsCard />
  </BrowserRouter>)
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
}

describe('Top10AccountsCard', () => {
  beforeEach(() => {
    // @ts-ignore TS is bad at mocking
    postQueryToAnalyticsApi.mockReset()
  })

  it('should render the data', async () => {
    await renderSubject([
      {
        address: '0000000000000000000000000B1E55ED',
        balance: 54321,
      },
    ])

    const table: HTMLTableElement | null | undefined = screen.queryByTestId('top-10-accounts')?.querySelector('table')
    expect(table).toBeInTheDocument()
    const cardBody = table!.tBodies.item(0)!
    expect(cardBody.rows).toHaveLength(1)
    expect(cardBody.rows[0].cells[0].textContent).toEqual('1')
    expect(cardBody.rows[0].cells[1].textContent).toEqual('0000000000000000000000000B1E55ED')
    expect(cardBody.rows[0].cells[2].textContent).toEqual('54321')
  })
  it('should link to the corresponding accounts', async () => {
    await renderSubject([
      {
        address: '0000000000000000000010000B1E55ED',
        balance: 54321,
      },
    ])

    const transactionCell = screen.queryByTestId('top-10-accounts')!.querySelector('table tbody tr td:nth-child(2)')
    expect(transactionCell).toBeInTheDocument()
    const transactionLink: HTMLAnchorElement | null = transactionCell!.querySelector('a')
    expect(transactionLink).toBeInTheDocument()
    expect(transactionLink!.href).toMatch('http://localhost/address/0000000000000000000010000B1E55ED')
  })
  it('should render the data in the order provided by the API', async () => {
    await renderSubject([
      {
        address: '0000000000000000000000000B0E55ED',
        balance: 1000,
      },
      {
        address: '0000000000000000000000000B1E552D',
        balance: 2000,
      },
    ])

    const table: HTMLTableElement = screen.queryByTestId('top-10-accounts')!.querySelector('table')!
    const cardBody = table.tBodies.item(0)!
    expect(cardBody!.rows).toHaveLength(2)
    expect(cardBody!.rows[0].cells[1].textContent).toEqual('0000000000000000000000000B0E55ED')
    expect(cardBody!.rows[1].cells[1].textContent).toEqual('0000000000000000000000000B1E552D')
  })
  it('should query the Analytics API correctly', async () => {
    await renderSubject()
    const expectedQuery = top10AccountsQuery('XUS')
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(expectedQuery, 'accounts_balances')
  })
})
