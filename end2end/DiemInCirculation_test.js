// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

Feature('diem-in-circulation-page')

function seeRowHeaders(I) {
  I.see('Currency')
  I.see('Total Net Value')
  I.see('Timestamp')
}

function seeRowData(I) {
  I.see('XUS')
  I.see('1040002525680000')
  I.see('2021-10-30T01:22:18.660Z')
}

function seeAbscissaLabels(I) {
  // eslint-disable-next-line no-undef
  within('.recharts-wrapper', () => {
    I.see('10/22')
    I.see('10/25')
  })
}

function seeOrdinateLabels(I) {
  // eslint-disable-next-line no-undef
  within('.recharts-wrapper', () => {
    I.see('0')
    I.see('1000')
  })
}

function seeGraph(I) {
  I.see('Diem In Circulation History In Past Week')
  seeAbscissaLabels(I)
  seeOrdinateLabels(I)
}

Scenario('navigating to diem in circulation button', ({ I }) => {
  I.amOnPage('/')
  I.click('Diem-In-Circulation')
  I.seeInCurrentUrl('/diemincirculation')

  I.see('Total Diem In Circulation')
  seeRowHeaders(I)
  seeRowData(I)
  seeGraph(I)
})
