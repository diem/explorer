// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

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
  I.see('6c746b429fbc7f6d4b4ce1ad940d356d')
  I.see('5d908a4bfcff104f62adbd423e449504')
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
  I.navigateToAddressPage('6c746b429fbc7f6d4b4ce1ad940d356d')
  I.navigateToAddressPage('5d908a4bfcff104f62adbd423e449504')
})
