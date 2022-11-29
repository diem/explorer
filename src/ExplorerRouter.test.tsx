// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import { render, screen } from '@testing-library/react'
import ExplorerRouter from './ExplorerRouter'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { mockLandingPageText } from './Pages/LandingPage/__mocks__/LandingPage'
import { mockTxnDetailsPageText } from './Pages/TxnDetailsPage/__mocks__/TxnDetailsPage'
import { mockAccountPageText } from './Pages/AccountPage/__mocks__/AccountPage'
import { accountNotFoundPageText } from './Pages/AccountPage/AccountNotFoundPage'
import { txnNotFoundPageText } from './Pages/TxnDetailsPage/TxnNotFoundPage'

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
      name: 'Transaction Details',
      route: '/txn/some_id',
      text: [mockTxnDetailsPageText, 'some_id'],
    },
    {
      name: 'Transaction Not Found',
      route: '/txn/not-found',
      text: [txnNotFoundPageText],
    },
    {
      name: 'Account',
      route: '/address/some_id',
      text: [mockAccountPageText, 'some_id'],
    },
    {
      name: 'Account Not Found',
      route: '/address/not-found',
      text: [accountNotFoundPageText],
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
