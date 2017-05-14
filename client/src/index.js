import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import io from 'socket.io-client'
import createSocketIoMiddleware from 'redux-socket.io'

import { clientToServerActions } from './actions.js'
import App from './containers/AppContainer.js'
import Reducer from './reducers.js'


const socket = io();
const socketIoMiddleware = createSocketIoMiddleware(socket, clientToServerActions)
const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(socketIoMiddleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)