Feature('account-page')

function seeRoleHeaders(I) {
  I.see('fill this out')
}

function seeRoleData(I) {
  I.see('fill this out')
}

function seePreburnData(I) {
  I.see('fill this out')
}
function seeBalanceHeaders(I) {
  I.see('fill this out')
}
function seeBalanceData(I) {
  I.see('fill this out')
}
function seeDDTierInfoHeaders(I) {
  I.see('fill this out')
}
function seeDDTierInfoData(I) {
  I.see('fill this out')
}
function seeDealerHeaders(I) {
  I.see('fill this out')
}
function seeDealerData(I) {
  I.see('fill this out')
}
function seeCredentialHeaders(I) {
  I.see('fill this out')
}
function seeCredentialData(I) {
  I.see('fill this out')
}
function seeFreezingBitHeaders(I) {
  I.see('fill this out')
}
function seeFreezingBitData(I) {
  I.see('fill this out')
}
function seeDiemAccountHeaders(I) {
  I.see('fill this out')
}
function seeDiemAccountData(I) {
  I.see('fill this out')
}
function seeEventHandleGeneratorHeaders(I) {
  I.see('fill this out')
}
function seeEventHandleGeneratorData(I) {
  I.see('fill this out')
}
function seePreburnHeaders(I) {
  I.see('fill this out')
}

function seeValidatorConfigHeaders(I) {
  I.see('fill this out')
}

function seeValidatorConfigData(I) {
  I.see('fill this out')
}

function seeValidatorOperatorConfigHeaders(I) {
  I.see('fill this out')
}

function seeValidatorOperatorConfigData(I) {
  I.see('fill this out')
}

function seeParentVaspHeaders(I) {
  I.see('fill this out')
}

function seeParentVaspData(I) {
  I.see('fill this out')
}

function seeChildVaspHeaders(I) {
  I.see('fill this out')
}

function seeChildVaspData(I) {
  I.see('fill this out')
}

Scenario('navigating to an account from landing page', ({ I }) => {
  I.amOnPage('/')
  I.fillField('Search by Address / Txn Version', '1081322FEF2DA29D62FE4E131EF4C859')
  I.pressKey('Enter')

  I.seeInCurrentUrl('/address/1081322FEF2DA29D62FE4E131EF4C859')
  I.see('Account Details')
})

Scenario('Displaying a Designated Dealer account', ({ I }) => {
  I.amOnPage('/address/1081322FEF2DA29D62FE4E131EF4C859')

  seeRoleHeaders(I)
  seeRoleData(I)

  seeBalanceHeaders(I)
  seeBalanceData(I)

  seeDDTierInfoHeaders(I)
  seeDDTierInfoData(I)

  seeDealerHeaders(I)
  seeDealerData(I)

  seeCredentialHeaders(I)
  seeCredentialData(I)

  seeFreezingBitHeaders(I)
  seeFreezingBitData(I)

  seeDiemAccountHeaders(I)
  seeDiemAccountData(I)

  seeEventHandleGeneratorHeaders(I)
  seeEventHandleGeneratorData(I)

  seePreburnHeaders(I)
  seePreburnData(I)
})

Scenario('Displaying a Validator account', ({ I }) => {
  I.amOnPage('/address/88C5DB7AD36F7A66A8FB2789FBDB30CC')

  seeRoleHeaders(I)
  seeRoleData(I)

  seeFreezingBitHeaders(I)
  seeFreezingBitData(I)

  seeDiemAccountHeaders(I)
  seeDiemAccountData(I)

  seeEventHandleGeneratorHeaders(I)
  seeEventHandleGeneratorData(I)

  seeValidatorConfigHeaders(I)
  seeValidatorConfigData(I)
})

Scenario('Displaying a Validator Operator account', ({ I }) => {
  I.amOnPage('/address/1FC5DD16A92E82A281A063E308EBCCA9')

  seeRoleHeaders(I)
  seeRoleData(I)

  seeFreezingBitHeaders(I)
  seeFreezingBitData(I)

  seeDiemAccountHeaders(I)
  seeDiemAccountData(I)

  seeEventHandleGeneratorHeaders(I)
  seeEventHandleGeneratorData(I)

  seeValidatorOperatorConfigHeaders(I)
  seeValidatorOperatorConfigData(I)
})

Scenario('Displaying a Parent VASP account', ({ I }) => {
  I.amOnPage('/address/E58479132486A97579EFF0EC6FF1EF1F')

  seeRoleHeaders(I)
  seeRoleData(I)

  seeBalanceHeaders(I)
  seeBalanceData(I)

  seeCredentialHeaders(I)
  seeCredentialData(I)

  seeFreezingBitHeaders(I)
  seeFreezingBitData(I)

  seeDiemAccountHeaders(I)
  seeDiemAccountData(I)

  seeEventHandleGeneratorHeaders(I)
  seeEventHandleGeneratorData(I)

  seeParentVaspHeaders(I)
  seeParentVaspData(I)
})

Scenario('Displaying a Child VASP account', ({ I }) => {
  I.amOnPage('/address/E58479132486A97579EFF0EC6FF1EF1F')

  seeRoleHeaders(I)
  seeRoleData(I)

  seeBalanceHeaders(I)
  seeBalanceData(I)

  seeFreezingBitHeaders(I)
  seeFreezingBitData(I)

  seeDiemAccountHeaders(I)
  seeDiemAccountData(I)

  seeEventHandleGeneratorHeaders(I)
  seeEventHandleGeneratorData(I)

  seeChildVaspHeaders(I)
  seeChildVaspData(I)
})
