import _ from 'lodash'
import Immutable from 'immutable'
import { combineReducers } from 'redux'

import {
  TYPE_USER,
  TYPE_ROOM,

  SET_USERNAME,
  SEND_MESSAGE,
  CHANGE_CHANNEL,

  SRV_SEND_MESSAGE,
  SRV_REFRESH,

  DEFAULT_CHANNEL
} from './actions.js'


const username = (state = '', {type, payload: username}) =>
  type === SET_USERNAME ? username : state

const channel = (state = DEFAULT_CHANNEL, {type, payload: channel}) =>
  type === CHANGE_CHANNEL ? channel : state


const messages = (state = Immutable.Map(), action) => {
  switch (action.type) {
    case SEND_MESSAGE:
    case SRV_SEND_MESSAGE:
      let { payload: { username, channel, text } } = action
      let keyPath = [channel.type, channel.id]
      let message = { key: _.uniqueId(), username, text }
      let updater = (messages = Immutable.List()) => messages.push(message)
      return state.updateIn(keyPath, updater)

    default:
      return state
  }
}

const refreshReducerFactory = (what) =>
  (state = [], action) =>
    action.type === SRV_REFRESH && action.what === what ? action.payload : state


export default combineReducers({
  username,
  messages,
  channel,
  usernames: refreshReducerFactory(TYPE_USER),
  chatrooms: refreshReducerFactory(TYPE_ROOM)
})
