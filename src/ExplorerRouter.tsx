import ApiRequestPage from './Pages/LandingPage/LandingPage'
import { Route, Switch } from 'react-router-dom'
import TxnDetailsPage from './Pages/TxnDetailsPage/TxnDetailsPage'
import NotFoundPage from './Pages/NotFoundPage'
import eventPages from './Pages/EventPages/EventPages'
import DiemIncirculationPage from './Pages/DiemInCirculationPage/DiemInCirculationPage'
import AccountPage from './Pages/AccountPage/AccountPage'

export default function ExplorerRouter() {
  return (
    <Switch>
      <Route exact path="/" component={ApiRequestPage} />
      <Route path="/txn/:version" component={TxnDetailsPage} />
      <Route path="/events/mint" component={eventPages.MintEventsPage} />
      <Route path="/events/burn" component={eventPages.BurnEventsPage} />
      <Route path="/events/payment" component={eventPages.PaymentEventsPage} />
      <Route path="/diemincirculation" component={DiemIncirculationPage} />
      <Route path="/address/:address" component={AccountPage} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}
