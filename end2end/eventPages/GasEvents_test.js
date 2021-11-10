Feature('gas-events-page')

function seeRowHeaders(I) {
  I.see('Transaction Version')
  I.see('Timestamp')
  I.see('Currency')
  I.see('Gas Paid')
  I.see('Receiver')
  I.see('Sender')
}
// {"data":{"gas_payments":[{"commit_timestamp":"2021-05-31T19:00:35+00:00","currency":"XUS","gas_paid":500,"receiver":"0000000000000000000000000B1E55ED","sender":"5D2DF1D33912E06BE9D041A8AEE913DF","version":142254414}]}}
function seeRowData(I) {
  I.see('142254414')
  I.see('2021-05-31T19:00:35+00:00')
  I.see('XUS')
  I.see('500')
  I.see('00000...E55ED')
  I.see('5D2DF...913DF')
}

Scenario('navigating to gas events from landing page', ({ I }) => {
  I.amOnPage('/')
  I.click('Events')
  I.navTo('Gas Events')
  I.seeInCurrentUrl('/events/gas')

  I.see('Gas Events')
  seeRowHeaders(I)
  seeRowData(I)
})
