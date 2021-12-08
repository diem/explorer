import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import LeaderboardPage from './LeaderboardPage'
import { mockTop10TransactionsCardText } from './Cards/__mocks__/Top10TransactionsCard'

jest.mock('./Cards/Top10TransactionsCard')

const renderSubject = async () => {
  render(
    <BrowserRouter>
      <LeaderboardPage />
    </BrowserRouter>
  )
}

describe('LeaderboardPage', () => {
  it('should have a page header', async () => {
    await renderSubject()
    const pageHeader = screen.queryByTestId('leaderboard-page-header')
    expect(pageHeader).toBeInTheDocument()
    expect(pageHeader!.textContent).toContain('Diem Leaderboard')
  })
  it('should display the top 10 transactions in the past 24 hours', async () => {
    await renderSubject()
    const top10TransactionsCard = screen.queryByTestId('top-10-transactions')
    expect(top10TransactionsCard).toBeInTheDocument()
    expect(top10TransactionsCard!.textContent).toContain(
      mockTop10TransactionsCardText
    )
  })
})
