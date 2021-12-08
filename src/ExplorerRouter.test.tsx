import { render, screen } from '@testing-library/react'
import ExplorerRouter from './ExplorerRouter'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { mockLandingPageText } from './Pages/LandingPage/__mocks__/LandingPage'
import { mockTxnDetailsPageText } from './Pages/TxnDetailsPage/__mocks__/TxnDetailsPage'
import {
  mockMintEventsPageText,
  mockBurnEventsPageText,
  mockPaymentEventsPageText,
  mockGasEventsPageText,
  mockPreburnEventsPageText,
  mockAccountCreationEventsPageText,
} from './Pages/EventPages/__mocks__/EventPages'
import { mockDiemInCirculationPageText } from './Pages/DiemInCirculationPage/__mocks__/DiemInCirculationPage'
import { mockAccountPageText } from './Pages/AccountPage/__mocks__/AccountPage'
import { mockLeaderboardPageText } from './Pages/LeaderboardPage/__mocks__/LeaderboardPage'

jest.mock('./Pages/LandingPage/LandingPage')
jest.mock('./Pages/TxnDetailsPage/TxnDetailsPage')
jest.mock('./Pages/EventPages/EventPages')
jest.mock('./Pages/DiemInCirculationPage/DiemInCirculationPage')
jest.mock('./Pages/AccountPage/AccountPage')
jest.mock('./Pages/LeaderboardPage/LeaderboardPage')

function renderWithRouter(path: string) {
  const history = createMemoryHistory()
  history.push(path)
  return render(
    <Router history={history}>
      <ExplorerRouter />
    </Router>
  )
}

describe('ExplorerRouter', () => {
  ;[
    {
      name: 'Landing',
      route: '/',
      text: [mockLandingPageText],
    },
    {
      name: 'Mint Events',
      route: '/events/mint',
      text: [mockMintEventsPageText],
    },
    {
      name: 'Burn Events',
      route: '/events/burn',
      text: [mockBurnEventsPageText],
    },
    {
      name: 'Payment Events',
      route: '/events/payment',
      text: [mockPaymentEventsPageText],
    },
    {
      name: 'Gas Events',
      route: '/events/gas',
      text: [mockGasEventsPageText],
    },
    {
      name: 'Preburn Events',
      route: '/events/preburn',
      text: [mockPreburnEventsPageText],
    },
    {
      name: 'Account Creation Events',
      route: '/events/accountcreation',
      text: [mockAccountCreationEventsPageText],
    },
    {
      name: 'Diem In Circulation',
      route: '/diemincirculation',
      text: [mockDiemInCirculationPageText],
    },
    {
      name: 'Leaderboard',
      route: '/leaderboard',
      text: [mockLeaderboardPageText],
    },
    {
      name: 'Transaction Details',
      route: '/txn/some_id',
      text: [mockTxnDetailsPageText, 'some_id'],
    },
    {
      name: 'Account',
      route: '/address/some_id',
      text: [mockAccountPageText, 'some_id'],
    },
    {
      name: '404',
      route: '/not_a_real_url',
      text: ['Page not found.'],
    },
  ].forEach((spec) => {
    it(`should render ${spec.name} page when path is ${spec.route}`, () => {
      renderWithRouter(spec.route)
      const textContent = screen.getByRole('main').textContent
      spec.text.forEach((text) => {
        expect(textContent).toContain(text)
      })
    })
  })
})
