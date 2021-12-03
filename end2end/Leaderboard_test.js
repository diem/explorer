Feature('leaderboard-page')

function seeRowHeaders(I) {
  I.seeInsideTestId('Ranking', 'top-10-transactions')
  I.seeInsideTestId('Version', 'top-10-transactions')
  I.seeInsideTestId('Amount (XUS)', 'top-10-transactions')
}

function seeRowData(I) {
  I.seeInsideTestId('1', 'top-10-transactions')
  I.seeInsideTestId('2345', 'top-10-transactions')
  I.seeInsideTestId('5432', 'top-10-transactions')
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
    I.seeInsideTestId('Rank', 'top-10-accounts')
    I.seeInsideTestId('Address', 'top-10-accounts')
    I.seeInsideTestId('Amount (XUS)', 'top-10-accounts')
  }

  const seeRowData = (I) => {
    I.seeInsideTestId('1', 'top-10-accounts')
    I.seeInsideTestId('0000000000000000000000000B1E55ED', 'top-10-accounts')
    I.seeInsideTestId('5432', 'top-10-accounts')
  }

  I.amOnPage('/leaderboard')
  I.see('Top 10 Accounts (XUS)')

  seeRowHeaders(I)
  seeRowData(I)
})
