Feature('mint-events-page')

function seeRowHeaders(I) {
  I.see('Transaction Version')
  I.see('Amount')
  I.see('Currency')
  I.see('Key')
  I.see('Receiver')
  I.see('Sequence Number')
}

function seeRowData(I) {
  I.see('310350361')
  I.see('730000')
  I.see('XUS')
  I.see('00000...63e11')
  I.see('CF940...63E11')
  I.see('36')
}

Scenario('test after data has loaded', ({ I }) => {
  I.amOnPage('/')
  I.click('Events')
  I.navTo('Mint Events')
  I.seeInCurrentUrl('/events/mint')

  seeRowHeaders(I)
  seeRowData(I)
})
