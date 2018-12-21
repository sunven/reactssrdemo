import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import commenReducer from './commenReducer'

export default function configureStore() {
  return createStore(
    commenReducer, applyMiddleware(thunk.withExtraArgument())
  )
}