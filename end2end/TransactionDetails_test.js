Feature('transaction-details-page')

function seeUserTxnRowHeaders (I) {
  I.see('Version ID')
  I.see('Status')
  I.see('Transaction Type')
  I.see('From')
  I.see('To')
  I.see('Amount')
  I.see('Expiration')
  I.see('Currency')
  I.see('Metadata')
  I.see('Metadata Signature')
  I.see('Sequence Number')
  I.see('Gas Used')
  I.see('Gas Unit Price')
  I.see('Max Gas Amount')
  I.see('Public Key')
  I.see('Signature')
  I.see('Script Hash')
}

function seeUserTxnRowData (I) {
  I.see('64117651')
  I.see('executed')
  I.see('user')
  I.see('e4d382572c1286984aecfae682db0370')
  I.see('ed53d2c05bc4ff33d15a744f35010026')
  I.see('1')
  I.see('1616166081')
  I.see('XUS')
  I.see('3653')
  I.see('511')
  I.see('0')
  I.see('1000000')
  I.see('7b1568a5d5e14be898fa56f3bdb460b8bc4de9bf1267e1cc7982338d51cc1b37')
  I.see('ec841ca48bfef97c4c867c5e18483730b6075820050baeef5c8ac0cdc3e28eb7dd6a16f7ab5b52f2ce16478b5b57d751ea3a351b71cc02973188dc8b4e086b03')
  I.see('04ea43107fafc12adcd09f6c68d63e194675d0ce843a7faf7cceb6c813db9d9a')
}

function seeUnsupportedTransactionCard(I) {
  I.see('Unsupported Transaction')
}

function navigateToAddressPage(I) {
  I.click('e4d382572c1286984aecfae682db0370')
  I.seeInCurrentUrl('/address/e4d382572c1286984aecfae682db0370')
  I.goBack()
  I.click('ed53d2c05bc4ff33d15a744f35010026')
  I.seeInCurrentUrl('/address/ed53d2c05bc4ff33d15a744f35010026')
}

Scenario('user transaction', ({ I }) => {
  I.amOnPage('/txn/64117651')
  I.seeMainWrapper()

  I.waitForElement('table', 10)
  I.see('Transaction Details')
  seeUserTxnRowHeaders(I)
  seeUserTxnRowData(I)

  navigateToAddressPage(I)
})

Scenario('metadata transaction', ({ I }) => {
  I.amOnPage('/txn/321960031')
  I.seeMainWrapper()

  I.waitForElement('.accordion', 10)
  I.see('Transaction Details')
  seeUnsupportedTransactionCard(I)
})
