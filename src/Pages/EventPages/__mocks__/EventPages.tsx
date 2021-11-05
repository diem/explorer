export const mockPaymentEventsPageText = 'This is payment events page'
const mockPaymentEventsPage = () => <div role="main">{mockPaymentEventsPageText}</div>

export const mockBurnEventsPageText = 'This is burn events page'
const mockBurnEventsPage = () => <div role="main">{mockBurnEventsPageText}</div>

export const mockMintEventsPageText = 'This is mint events page'
const mockMintEventsPage = () => <div role="main">{mockMintEventsPageText}</div>

const mockEventPages = {
  BurnEventsPage: mockBurnEventsPage,
  MintEventsPage: mockMintEventsPage,
  PaymentEventsPage: mockPaymentEventsPage
}

export default mockEventPages
