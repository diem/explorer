// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

export const mockAccountCreationEventsPageText =
  'This is account creation events page'
const mockAccountCreationEventsPage = () => (
  <div role='main'>{mockAccountCreationEventsPageText}</div>
)

export const mockPreburnEventsPageText = 'This is preburn events page'
const mockPreburnEventsPage = () => (
  <div role='main'>{mockPreburnEventsPageText}</div>
)

export const mockGasEventsPageText = 'This is gas events page'
const mockGasEventsPage = () => <div role='main'>{mockGasEventsPageText}</div>

export const mockPaymentEventsPageText = 'This is payment events page'
const mockPaymentEventsPage = () => (
  <div role='main'>{mockPaymentEventsPageText}</div>
)

export const mockBurnEventsPageText = 'This is burn events page'
const mockBurnEventsPage = () => <div role='main'>{mockBurnEventsPageText}</div>

export const mockMintEventsPageText = 'This is mint events page'
const mockMintEventsPage = () => <div role='main'>{mockMintEventsPageText}</div>

const mockEventPages = {
  BurnEventsPage: mockBurnEventsPage,
  MintEventsPage: mockMintEventsPage,
  PaymentEventsPage: mockPaymentEventsPage,
  GasEventsPage: mockGasEventsPage,
  PreburnEventsPage: mockPreburnEventsPage,
  AccountCreationEventsPage: mockAccountCreationEventsPage,
}

export default mockEventPages
