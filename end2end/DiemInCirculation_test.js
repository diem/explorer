Feature('diem-in-circulation-page')

function seeRowHeaders(I) {
  I.see('Currency')
  I.see('Total Net Value')
  I.see('Timestamp')
}
function seeRowData(I) {
  I.see('XUS')
  I.see('1039997150390000')
  I.see('2021-10-29T23:47:22.663507+00:00')
}

Scenario('navigating to diem in circulation button', ({ I }) => {
  I.amOnPage('/')
  I.click('Diem-In-Circulation')
  I.seeInCurrentUrl('/diemincirculation')

  I.see('Total Diem In Circulation')
  seeRowHeaders(I)
  seeRowData(I)
})
