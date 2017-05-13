import { combineReducers } from 'redux'

import { SET_USERNAME, SEND_MESSAGE, SRV_SEND_MESSAGE } from './actions.js'


const username = (state = '', action) => {
  return action.type === SET_USERNAME
    ? action.username
    : state
}


let messageId = 0

const messages = (state = [], action) => {
  switch (action.type) {
    case SEND_MESSAGE:
    case SRV_SEND_MESSAGE:
      return [
        ...state,
        {key: ++messageId, ...action.message}
      ]

    default:
      return state
  }
}


export default combineReducers({
  username,
  messages
})
