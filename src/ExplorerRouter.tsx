import ApiRequestPage from './Pages/LandingPage/LandingPage'
import { Route, Switch } from 'react-router-dom'
import TxnDetailsPage from './Pages/TxnDetailsPage/TxnDetailsPage'
import NotFoundPage from './Pages/NotFoundPage'
import MintEventsPage from './Pages/MintEventsPage/MintEventsPage'
import BurnEventsPage from './Pages/BurnEventsPage/BurnEventsPage'
import DiemIncirculationPage from './Pages/DiemInCirculationPage/DiemInCirculationPage'

export default function ExplorerRouter () {
  return (
      <Switch>
        <Route exact path="/" component={ApiRequestPage} />
        <Route path="/txn/:version" component={TxnDetailsPage} />
        <Route path="/events/mint" component={MintEventsPage} />
        <Route path="/events/burn" component={BurnEventsPage} />
        <Route path="/diemincirculation" component={DiemIncirculationPage} />
        <Route component={NotFoundPage} />
      </Switch>
  )
}
