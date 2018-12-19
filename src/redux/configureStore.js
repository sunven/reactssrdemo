import { createStore, } from 'redux'
import commenReducer from './commenReducer'

export default function configureStore() {
  return createStore(
    commenReducer
  )
}