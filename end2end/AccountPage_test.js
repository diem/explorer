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

function seeSmartContractMethods(I) {
  I.see('Smart Contract Methods')
  I.see('fun exchangeXdxForXus(arg1: u64): bool')
}

function seeSmartContractStructs(I) {
  I.see('Smart Contract Structs')
  I.see('struct AccountType {\n\taccount_type: u64\n}')
}

function seeSequenceNumber(I, expectedSequenceNumber) {
  I.see('Sequence Number')
  I.see(expectedSequenceNumber)
}

function seeAuthenticationKey(I, expectedAuthKey) {
  I.see('Authentication Key')
  I.see(expectedAuthKey)
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

  seeSequenceNumber(I, '43828')
  seeAuthenticationKey(I, '0x2b33352cdbfa7d773a1e3788650257231081322fef2da29d62fe4e131ef4c859')
})

Scenario('Displaying a Validator account', ({ I }) => {
  I.amOnPage(`/address/${validatorAddress}`)

  seeUnsupportedAccountCard(I)

  seeRawSmartContracts(I)
  seeRawResources(I)

  seeSequenceNumber(I, '0')
  seeAuthenticationKey(I, '0x0000000000000000000000000000000000000000000000000000000000000000')
})

Scenario('Displaying a Validator Operator account', ({ I }) => {
  I.amOnPage(`/address/${validatorOperatorAddress}`)

  seeUnsupportedAccountCard(I)

  seeRawSmartContracts(I)
  seeRawResources(I)

  seeSequenceNumber(I, '143')
  seeAuthenticationKey(I, '0xd8feed37ebabc4db0e9ca2601b288d451fc5dd16a92e82a281a063e308ebcca9')
})

Scenario('Displaying a Parent VASP account', ({ I }) => {
  I.amOnPage(`/address/${parentVaspAddress}`)

  seeBalanceHeaders(I)
  seeBalanceData(I)

  seeRawSmartContracts(I)
  seeRawResources(I)

  seeSmartContractMethods(I)
  seeSmartContractStructs(I)

  seeSequenceNumber(I, '4518')
  seeAuthenticationKey(I, '0xeca9a32d2f1e3309e6be33a6a4688d1be58479132486a97579eff0ec6ff1ef1f')
})

Scenario('Displaying a Child VASP account', ({ I }) => {
  I.amOnPage(`/address/${childVaspAddress}`)

  seeBalanceHeaders(I)
  seeBalanceData(I)

  seeRawSmartContracts(I)
  seeRawResources(I)

  seeSequenceNumber(I, '16')
  seeAuthenticationKey(I, '0x4c0844ff46ba622eaf89c9e8ac741394d54381f6f7e808f942309f885d1ce738')
})
