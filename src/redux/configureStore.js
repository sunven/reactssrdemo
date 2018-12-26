import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import commenReducer from './commenReducer'

export const getServerStore = () => {
  return createStore(
    commenReducer, applyMiddleware(thunk.withExtraArgument())
  )
}

export const getClientStore = () => {
  const defaultState = window.__STATE__;
  return createStore(
    commenReducer, defaultState, applyMiddleware(thunk.withExtraArgument())
  )
}