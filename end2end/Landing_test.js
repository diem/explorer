Feature('landing-page')

function seeLandingPageHardCodedStrings (I) {
  I.seeMainWrapper()
  I.see('Welcome To Diem Explorer')
  I.see('Recent Transactions')
}

function seeLandingPageTableHeaders (I) {
  I.see('Version')
  I.see('Timestamp')
  I.see('Type')
  I.see('Status')
}

function seeLandingPageTableValues (I) {
  I.see('502')
  I.see('2021-04-19 00:30:00.000000 +00:00')
  I.see('UserTransaction')
  I.see('Executed')
}

function seeCurrentStatisticsCard(I) {
  I.see('Current Statistics')
  I.see('TPS\n42')
  I.see('Total Mint Value\n800 XUS')
  I.see('Total Burn Value\n700 XUS')
  I.see('XUS In Circulation\n100 XUS')
}

Scenario('test after data has loaded', ({ I }) => {
  I.amOnPage('/')
  seeLandingPageHardCodedStrings(I)

  I.waitForElement('table', 10)
  seeLandingPageTableHeaders(I)
  seeLandingPageTableValues(I)

  seeCurrentStatisticsCard(I)
})
