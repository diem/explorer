// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Top10TransactionsCard, {
  TopSentPaymentEvent,
} from './Top10TransactionsCard'
import { postQueryToAnalyticsApi } from '../../../api_clients/AnalyticsClient'
import { top10Transactions } from '../../../api_clients/AnalyticsQueries'
import { Ok } from 'ts-results'

jest.useFakeTimers().setSystemTime(new Date('2021-01-01').getTime())

jest.mock('../../../api_clients/AnalyticsClient', () => ({
  postQueryToAnalyticsApi: jest.fn(),
}))

const renderSubject = async (transactions: TopSentPaymentEvent[] = []) => {
  // @ts-ignore TS is bad at mocking
  postQueryToAnalyticsApi.mockResolvedValue(Ok(transactions))

  render(
    <BrowserRouter>
      <Top10TransactionsCard />
    </BrowserRouter>
  )
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
}

describe('Top10TransactionsCard', () => {
  beforeEach(() => {
    // @ts-ignore TS is bad at mocking
    postQueryToAnalyticsApi.mockReset()
  })

  it('should render the data', async () => {
    await renderSubject([
      {
        transaction_version: 12345,
        amount: 54321,
      },
    ])

    const table: HTMLTableElement | null | undefined = screen
      .queryByTestId('top-10-transactions')
      ?.querySelector('table')
    expect(table).toBeInTheDocument()
    const cardBody = table!.tBodies.item(0)!
    expect(cardBody.rows).toHaveLength(1)
    expect(cardBody.rows[0].cells[0].textContent).toEqual('1')
    expect(cardBody.rows[0].cells[1].textContent).toEqual('12345')
    expect(cardBody.rows[0].cells[2].textContent).toEqual('54321')
  })
  it('should link to the corresponding transactions', async () => {
    await renderSubject([
      {
        transaction_version: 12345,
        amount: 54321,
      },
    ])

    const transactionCell = screen
      .queryByTestId('top-10-transactions')!
      .querySelector('table tbody tr td:nth-child(2)')
    expect(transactionCell).toBeInTheDocument()
    const transactionLink: HTMLAnchorElement | null =
      transactionCell!.querySelector('a')
    expect(transactionLink).toBeInTheDocument()
    expect(transactionLink!.href).toMatch(/\/txn\/12345$/)
  })
  it('should render the data in the order provided by the API', async () => {
    await renderSubject([
      {
        transaction_version: 1,
        amount: 1000,
      },
      {
        transaction_version: 2,
        amount: 2000,
      },
    ])

    const table: HTMLTableElement = screen
      .queryByTestId('top-10-transactions')!
      .querySelector('table')!
    const cardBody = table.tBodies.item(0)!
    expect(cardBody!.rows).toHaveLength(2)
    expect(cardBody!.rows[0].cells[1].textContent).toEqual('1')
    expect(cardBody!.rows[1].cells[1].textContent).toEqual('2')
  })
  it('should render table  without  data in the order provided by the API', async () => {
    await renderSubject([])
    expect(screen.queryByText('No transactions available in last 24 hours')).toBeInTheDocument()

  })
  it('should query the Analytics API correctly', async () => {
    await renderSubject()
    const expectedQuery = top10Transactions('XUS')
    expect(postQueryToAnalyticsApi).toHaveBeenCalledTimes(1)
    expect(postQueryToAnalyticsApi).toHaveBeenCalledWith(
      expectedQuery,
      'sentpayment_events'
    )
  })
})
