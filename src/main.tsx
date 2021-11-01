import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import { Router } from 'react-router-dom'
import ExplorerRouter from './ExplorerRouter'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ExplorerRouter />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
