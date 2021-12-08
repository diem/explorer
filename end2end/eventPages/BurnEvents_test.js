Feature('burn-events-page')

function seeRowHeaders(I) {
  I.see('Transaction Version')
  I.see('Amount')
  I.see('Currency')
  I.see('Key')
  I.see('Address')
  I.see('Sequence Number')
}
function seeRowData(I) {
  I.see('cf9405939fd0262b8bb8f2d513f63e11')
  I.see('6000...50c18')
  I.see('312039858')
  I.see('950000')
  I.see('XUS')
  I.see('19178')
}

Scenario('navigating to burn event from landing page', ({ I }) => {
  I.amOnPage('/')
  I.click('Events')
  I.navTo('Burn Events')
  I.seeInCurrentUrl('/events/burn')

  I.see('Burn Events')
  seeRowHeaders(I)
  seeRowData(I)
  I.navigateToAddressPage('cf9405939fd0262b8bb8f2d513f63e11')
})
