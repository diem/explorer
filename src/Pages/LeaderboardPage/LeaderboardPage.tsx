// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react'
import Top10TransactionsCard from './Cards/Top10TransactionsCard'
import MainWrapper from '../../MainWrapper'
import Top10AccountsCard from './Cards/Top10AccountsCard'

export default function LeaderboardPage() {
  return (
    <MainWrapper>
      <main>
        <header data-testid='leaderboard-page-header'>
          <h2>Diem Leaderboard</h2>
        </header>
        <Top10AccountsCard />
        <Top10TransactionsCard />
      </main>
    </MainWrapper>
  )
}
