Feature('leaderboard-page')

function seeRowHeaders(I) {
  I.see('Ranking')
  I.see('Version')
  I.see('Amount (XUS)')
}

function seeRowData(I) {
  // TODO: use mock data
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
