import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {getClientStore} from './redux/configureStore'
import App from './App'

const store = getClientStore()

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)