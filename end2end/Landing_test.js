// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

Feature('landing-page')

function seeLandingPageHardCodedStrings (I) {
  I.seeMainWrapper()
  I.see('Welcome To Diem Explorer') 
}
 
Scenario('test after data has loaded', ({ I }) => {
  I.amOnPage('/')
  seeLandingPageHardCodedStrings(I)
})
