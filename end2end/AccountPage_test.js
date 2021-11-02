Feature('account-page')

function seeBalanceHeaders(I) {
  I.see('fill this out')
}

function seeBalanceData(I) {
  I.see('fill this out')
}

function seeRawSmartContracts(I) {
  I.see('fill this out')
}

function seeRawResources(I) {
  I.see('fill this out')
}

function seeUnsupportedAccountCard(I) {
  I.see('Unsupported Account')
}

Scenario('navigating to an account from landing page', ({ I }) => {
  I.amOnPage('/')
  I.fillField('Search by Address / Txn Version', '1081322FEF2DA29D62FE4E131EF4C859')
  I.pressKey('Enter')

  I.seeInCurrentUrl('/address/1081322FEF2DA29D62FE4E131EF4C859')
  I.seeMainWrapper()
  I.see('Account Details')
})

Scenario('Displaying a Designated Dealer account', ({ I }) => {
  I.amOnPage('/address/1081322FEF2DA29D62FE4E131EF4C859')

  seeBalanceHeaders(I)
  seeBalanceData(I)

  seeRawSmartContracts(I)
  seeRawResources(I)
})

Scenario('Displaying a Validator account', ({ I }) => {
  I.amOnPage('/address/88C5DB7AD36F7A66A8FB2789FBDB30CC')

  seeUnsupportedAccountCard(I)

  seeRawSmartContracts(I)
  seeRawResources(I)
})

Scenario('Displaying a Validator Operator account', ({ I }) => {
  I.amOnPage('/address/1FC5DD16A92E82A281A063E308EBCCA9')

  seeUnsupportedAccountCard(I)

  seeRawSmartContracts(I)
  seeRawResources(I)
})

Scenario('Displaying a Parent VASP account', ({ I }) => {
  I.amOnPage('/address/E58479132486A97579EFF0EC6FF1EF1F')

  seeBalanceHeaders(I)
  seeBalanceData(I)

  seeRawSmartContracts(I)
  seeRawResources(I)
})

Scenario('Displaying a Child VASP account', ({ I }) => {
  I.amOnPage('/address/E58479132486A97579EFF0EC6FF1EF1F')

  seeBalanceHeaders(I)
  seeBalanceData(I)

  seeRawSmartContracts(I)
  seeRawResources(I)
})
