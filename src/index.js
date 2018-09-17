import React from 'react'
import ReactDOM from 'react-dom'
import reducers from './reducers'
import App from './components/app'
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'


const createMiddlewareStore = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createMiddlewareStore(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#root'))
