Feature('payment-events-page')

function seeRowHeaders(I) {
  I.see('Transaction Version')
  I.see('Amount')
  I.see('Currency')
  I.see('Key')
  I.see('Receiver')
  I.see('Sender')
  I.see('Sequence Number')
}
function seeRowData(I) {
  I.see('340078450')
  I.see('12')
  I.see('XUS')
  I.see('04000...49504')
  I.see('6C746B429FBC7F6D4B4CE1AD940D356D')
  I.see('5D908A4BFCFF104F62ADBD423E449504')
  I.see('11772')
}

Scenario('navigating to payment event from landing page', ({ I }) => {
  I.amOnPage('/')
  I.click('Events')
  I.navTo('Payment Events')
  I.seeInCurrentUrl('/events/payment')

  I.see('Payment Events')
  seeRowHeaders(I)
  seeRowData(I)
  I.navigateToAddressPage('6C746B429FBC7F6D4B4CE1AD940D356D')
  I.navigateToAddressPage('5D908A4BFCFF104F62ADBD423E449504')
})
