// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    seeMainWrapper () {
      this.seeHeader()
      this.seeFooter()
    },

    seeHeader () {
      this.see('explorer')
    },

    seeFooter () {
      this.see('© 2021 Diem Association')
    },

    navTo(pageName) {
      this.see(pageName, 'a')
      this.click(pageName)
    },

    goBack() {
      this.executeScript('window.history.back();')
    },

    navigateToAddressPage(address) {
      this.click(address)
      this.seeInCurrentUrl(`/address/${address}`)
      this.goBack()
    },

    seeInsideTestId(text, testId) {
      // eslint-disable-next-line no-undef
      locate(`[data-test-id=${testId}]`).withText(text)
    }
  })
}
