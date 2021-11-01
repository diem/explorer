Feature('account-page')

Scenario('navigating to burn event from landing page', ({ I }) => {
  I.amOnPage('/')
  I.fillField('Username or email address', 'something@totest.com')

  I.navTo('Burn Events')
  I.seeInCurrentUrl('/events/burn')

  I.see('Burn Events')
  seeRowHeaders(I)
  seeRowData(I)
})
