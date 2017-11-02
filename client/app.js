import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './utils/store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('#app')
)
