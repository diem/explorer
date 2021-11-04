Feature('account-page')

function seeBalanceHeaders(I) {
  locate('table').withText('XUS')
  locate('table').withText('XDX')
}

function seeBalanceData(I) {
  locate('table').withText('9001')
  locate('table').withText('322642497000000')
}

function seeRawSmartContracts(I) {
  I.see('[🦍, Gorilla is intentionally silly data to signal that smart contracts are rendered on page.]')
}

function seeRawResources(I) {
  I.see('\"\uD83E\uDD76, Cold face is intentionally silly data to signal that raw resources are rendered on page.\"')
}

function seeUnsupportedAccountCard(I) {
  I.see('Unsupported Account')
}

Scenario('navigating to an account from landing page', ({ I }) => {
  I.amOnPage('/')
  I.fillField('Search by Address / Txn Version', '1081322fef2da29d62fe4e131ef4c859')
  I.pressKey('Enter')

  I.seeInCurrentUrl('/address/1081322fef2da29d62fe4e131ef4c859')
  I.seeMainWrapper()
  I.see('Account Details')
})

Scenario('Displaying a Designated Dealer account', ({ I }) => {
  I.amOnPage('/address/1081322fef2da29d62fe4e131ef4c859')

  seeBalanceHeaders(I)
  seeBalanceData(I)

  seeRawResources(I)
  seeRawSmartContracts(I)
})

// Scenario('Displaying a Validator account', ({ I }) => {
//   I.amOnPage('/address/88C5DB7AD36F7A66A8FB2789FBDB30CC')
//
//   seeUnsupportedAccountCard(I)
//
//   seeRawSmartContracts(I)
//   seeRawResources(I)
// })
//
// Scenario('Displaying a Validator Operator account', ({ I }) => {
//   I.amOnPage('/address/1FC5DD16A92E82A281A063E308EBCCA9')
//
//   seeUnsupportedAccountCard(I)
//
//   seeRawSmartContracts(I)
//   seeRawResources(I)
// })
//
// Scenario('Displaying a Parent VASP account', ({ I }) => {
//   I.amOnPage('/address/E58479132486A97579EFF0EC6FF1EF1F')
//
//   seeBalanceHeaders(I)
//   seeBalanceData(I)
//
//   seeRawSmartContracts(I)
//   seeRawResources(I)
// })
//
// Scenario('Displaying a Child VASP account', ({ I }) => {
//   I.amOnPage('/address/E58479132486A97579EFF0EC6FF1EF1F')
//
//   seeBalanceHeaders(I)
//   seeBalanceData(I)
//
//   seeRawSmartContracts(I)
//   seeRawResources(I)
// })
