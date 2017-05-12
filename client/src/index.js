import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';

import App from './containers/App.js'
import Reducer from './reducers.js'


let socket = io();
let socketIoMiddleware = createSocketIoMiddleware(socket);
let store = createStore(Reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)