Feature('gas-events-page')

function seeRowHeaders(I) {
  I.see('Transaction Version')
  I.see('Timestamp')
  I.see('Currency')
  I.see('Gas Paid')
  I.see('Receiver')
  I.see('Sender')
}

function seeRowData(I) {
  I.see('142254414')
  I.see('2021-05-31T19:00:35+00:00')
  I.see('XUS')
  I.see('500')
  I.see('0000000000000000000000000b1e55ed')
  I.see('5d2df1d33912e06be9d041a8aee913df')
}

Scenario('navigating to gas events from landing page', ({ I }) => {
  I.amOnPage('/')
  I.click('Events')
  I.navTo('Gas Events')
  I.seeInCurrentUrl('/events/gas')

  I.see('Gas Events')
  seeRowHeaders(I)
  seeRowData(I)
  I.navigateToAddressPage('0000000000000000000000000b1e55ed')
  I.navigateToAddressPage('5d2df1d33912e06be9d041a8aee913df')
})
