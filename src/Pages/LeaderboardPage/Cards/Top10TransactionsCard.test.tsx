import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Top10TransactionsCard from './Top10TransactionsCard'

const renderSubject = async () => {
  render(<BrowserRouter>
    <Top10TransactionsCard />
  </BrowserRouter>)
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
}

describe('Top10TransactionsCard', () => {
  it('should have a title with an explanation', async () => {
    await renderSubject()

    const cardHeader = screen.queryByText('Top 10 Transactions (XUS)')
    expect(cardHeader).toBeInTheDocument()
    expect(cardHeader!.title).toContain('in the last 24 hours')
  })
  it('should have data', async () => {
    // TODO: handle async rendering and the disappearance of the loading text
    // TODO: mock the response
    await renderSubject()

    const cardBody: HTMLTableSectionElement | null = screen.queryByTestId('top-10-transactions')
    expect(cardBody).toBeInTheDocument()
    expect(cardBody!.rows).toHaveLength(1) // TODO: update this assertion
    expect(cardBody!.rows[0].cells[0].textContent).toEqual('1')
    expect(cardBody!.rows[0].cells[1].textContent).toEqual('12345')
    expect(cardBody!.rows[0].cells[2].textContent).toEqual('54321')
  })
})
