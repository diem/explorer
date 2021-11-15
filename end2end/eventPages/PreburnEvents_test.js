Feature('preburn-events-page')

function seeRowHeaders(I) {
  I.see('Version')
  I.see('Timestamp')
  I.see('Amount')
  I.see('Status')
  I.see('Sender')
  I.see('Receiver')
  I.see('Currency')
}

function seeRowData(I) {
  I.see('312039453')
  I.see('2021-10-15T01:07:26+00:00')
  I.see('950000')
  I.see('1')
  I.see('CF9405939FD0262B8BB8F2D513F63E11')
  I.see('0000000000000000000000000B1E55ED')
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
  I.navigateToAddressPage('0000000000000000000000000B1E55ED')
})
