// import React from 'react'
// import { renderToString } from 'react-dom/server'

// import { Provider } from 'react-redux'
// import configureStore from './redux/configureStore'
// import App from './components/app'

const React = require('react');
const { renderToString } = require('react-dom/server');
const { Provider } = require('react-redux');
const configureStore = require('./redux/configureStore');
const App = require('./components/app');

module.exports = function render(initialState) {
  // store
  const store = configureStore(initialState)

  // renderToString
  let content = renderToString(
    <Provider store={store} >
       <App />
    </Provider>
  );

  // 用于存储在客户端
  const preloadedState = store.getState()

  return {content, preloadedState};
}