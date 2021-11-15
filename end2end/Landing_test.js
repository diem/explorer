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

function seeTpsCard(I) {
  I.see('Current Transactions Per Second')
  I.see('42 tps')
}

Scenario('test after data has loaded', ({ I }) => {
  I.amOnPage('/')
  seeLandingPageHardCodedStrings(I)

  I.waitForElement('table', 10)
  seeLandingPageTableHeaders(I)
  seeLandingPageTableValues(I)

  seeTpsCard(I)
})
