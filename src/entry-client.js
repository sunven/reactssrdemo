import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import App from './App'

let initialState = {
  comments: [-1]
}
const store = configureStore()

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)