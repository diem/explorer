// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import ApiRequestPage from './Pages/LandingPage/LandingPage'
import { Route, Switch } from 'react-router-dom'
import TxnDetailsPage from './Pages/TxnDetailsPage/TxnDetailsPage'
import NotFoundPage from './Pages/NotFoundPage'
import AccountPage from './Pages/AccountPage/AccountPage'
import AccountNotFoundPage from './Pages/AccountPage/AccountNotFoundPage'
import TxnNotFoundPage from './Pages/TxnDetailsPage/TxnNotFoundPage'


export default function ExplorerRouter() {
  return (
    <Switch>
      <Route exact path='/' component={ApiRequestPage} />
      <Route path='/txn/not-found' component={TxnNotFoundPage} />
      <Route path='/txn/:version' component={TxnDetailsPage} />
      <Route path='/address/not-found' component={AccountNotFoundPage} />
      <Route path='/address/:address' component={AccountPage} />

      <Route component={NotFoundPage} />
    </Switch>
  )
}
