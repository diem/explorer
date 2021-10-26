import ApiRequestPage from './LandingPage/LandingPage'
import { Route, Switch } from 'react-router-dom'
import TxnDetailsPage from './TxnDetailsPage/TxnDetailsPage'
import NotFoundPage from './NotFoundPage'
import MintEventsPage from './MintEventsPage/MintEventsPage'

export default function ExplorerRouter () {
  return (
      <Switch>
        <Route exact path="/" component={ApiRequestPage} />
        <Route path="/txn/:version" component={TxnDetailsPage} />
        <Route path="/events/mint" component={MintEventsPage} />
        <Route component={NotFoundPage} />
      </Switch>
  )
}
