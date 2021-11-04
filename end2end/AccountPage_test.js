Feature('account-page')

function seeBalanceHeaders(I) {
  I.see('XUS', '.objectPropertiesTable')
  I.see('XDX', '.objectPropertiesTable')
}

function seeBalanceData(I) {
  I.see('9001', '.objectPropertiesTable')
  I.see('12345679', '.objectPropertiesTable')
}

function seeRawSmartContracts(I) {
  I.see('🦍, Gorilla is intentionally silly data to signal that smart contracts are rendered on page.')
}

function seeRawResources(I) {
  I.see('🥶, Cold face is intentionally silly data to signal that raw resources are rendered on page.')
}

function seeUnsupportedAccountCard(I) {
  I.see('Unsupported Account')
}

const designatedDealerAddress = '1081322fef2da29d62fe4e131ef4c859'
const validatorAddress = '88c5db7ad36f7a66a8fb2789fbdb30cc'
const validatorOperatorAddress = '1fc5dd16a92e82a281a063e308ebcca9'
const parentVaspAddress = 'e58479132486a97579eff0ec6ff1ef1f'
const childVaspAddress = 'd54381f6f7e808f942309f885d1ce738'

Scenario('navigating to an account from landing page', ({ I }) => {
  I.amOnPage('/')
  I.fillField('Search by Address / Txn Version', designatedDealerAddress)
  I.pressKey('Enter')

  I.seeInCurrentUrl(`/address/${designatedDealerAddress}`)
  I.seeMainWrapper()
  I.see('Account Details')
})

Scenario('Displaying a Designated Dealer account', ({ I }) => {
  I.amOnPage(`/address/${designatedDealerAddress}`)

  seeBalanceHeaders(I)
  seeBalanceData(I)

  seeRawResources(I)
  seeRawSmartContracts(I)
})

Scenario('Displaying a Validator account', ({ I }) => {
  I.amOnPage(`/address/${validatorAddress}`)

  seeUnsupportedAccountCard(I)

  seeRawSmartContracts(I)
  seeRawResources(I)
})

Scenario('Displaying a Validator Operator account', ({ I }) => {
  I.amOnPage(`/address/${validatorOperatorAddress}`)

  seeUnsupportedAccountCard(I)

  seeRawSmartContracts(I)
  seeRawResources(I)
})

Scenario('Displaying a Parent VASP account', ({ I }) => {
  I.amOnPage(`/address/${parentVaspAddress}`)

  seeBalanceHeaders(I)
  seeBalanceData(I)

  seeRawSmartContracts(I)
  seeRawResources(I)
})

Scenario('Displaying a Child VASP account', ({ I }) => {
  I.amOnPage(`/address/${childVaspAddress}`)

  seeBalanceHeaders(I)
  seeBalanceData(I)

  seeRawSmartContracts(I)
  seeRawResources(I)
})
