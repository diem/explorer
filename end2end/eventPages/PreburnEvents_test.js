Feature('preburn-events-page')

function seeRowHeaders(I) {
  I.see('Transaction Version')
  I.see('Timestamp')
  I.see('Address')
  I.see('Amount')
  I.see('Currency')
}

function seeRowData(I) {
  I.see('312039453')
  I.see('1970-01-01T00:00:00+00:00')
  I.see('CF9405939FD0262B8BB8F2D513F63E11')
  I.see('950000')
  I.see('XUS')
}

Scenario('navigating to preburn events from landing page', ({ I }) => {
  I.amOnPage('/')
  I.click('Events')
  I.navTo('Preburn Events')
  I.seeInCurrentUrl('/events/preburn')

  I.see('Preburn Events')
  seeRowHeaders(I)
  seeRowData(I)
  I.navigateToAddressPage('CF9405939FD0262B8BB8F2D513F63E11')
})
