Feature('leaderboard-page')

function seeRowHeaders(I) {
  I.within(I.getByTestId('top-10-transactions'), () => {
    I.see('Ranking')
    I.see('Version')
    I.see('Amount (XUS)')
  })
}

function seeRowData(I) {
  I.within(I.getByTestId('top-10-transactions'), () => {
    I.see('1')
    I.see('2345')
    I.see('5432')
  })
}

Scenario('navigating to the leaderboard page', ({ I }) => {
  I.amOnPage('/')
  I.click('Leaderboard')
  I.seeInCurrentUrl('/leaderboard')
  I.see('Diem Leaderboard')
})

Scenario('displaying the top 10 transactions in the past 24 hours', ({ I }) => {
  I.amOnPage('/leaderboard')
  I.see('Top 10 Transactions (XUS)')

  seeRowHeaders(I)
  seeRowData(I)
})

Scenario('displaying the top 10 accounts in the past 24 hours', ({ I }) => {
  const seeRowHeaders = (I) => {
    I.within(I.getByTestId('top-10-accounts'), () => {
      I.see('Rank')
      I.see('Address')
      I.see('Amount (XUS)')
    })
  }

  const seeRowData = (I) => {
    I.within(I.getByTestId('top-10-accounts'), () => {
      I.see('1')
      I.see('0000000000000000000000000B1E55ED')
      I.see('5432')
    })
  }

  I.amOnPage('/leaderboard')
  I.see('Top 10 Accounts (XUS)')

  seeRowHeaders(I)
  seeRowData(I)
})
