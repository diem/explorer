// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import MainWrapper from '../../MainWrapper'

export const txnNotFoundPageText = 'Transaction not found.'
export default function TxnNotFoundPage() {
  return (
    <MainWrapper>
      <>{txnNotFoundPageText}</>
    </MainWrapper>
  )
}
