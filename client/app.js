import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './utils/store'

import SearchRoute from './routes/search'

import 'style/index.scss'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={SearchRoute} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('#app')
)
