import React from 'react'
import Top10TransactionsCard from './Cards/Top10TransactionsCard'
import MainWrapper from '../../MainWrapper'

export default function LeaderboardPage() {
  return (
    <MainWrapper>
      <main>
        <header data-testid='leaderboard-page-header'>
          <h2>Diem Leaderboard</h2>
        </header>
        <Top10TransactionsCard />
      </main>
    </MainWrapper>
  )
}
