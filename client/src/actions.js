// some primitive types and models

export const TYPE_USER = 'TYPE_USER'
export const TYPE_ROOM = 'TYPE_ROOM'

export const Channel = (type, id) => ({type, id})   // id is username / chatroom
export const DEFAULT_CHANNEL = Channel('TYPE_ROOM', 'yada.local')

export const Message = (username, channel, text) => ({username, channel, text})


// client-side action

export const CHANGE_CHANNEL = 'CHANGE_CHANNEL'


// client-initiated actions

const actionFactory = (type) => (payload) => ({ type, payload })

export const SET_USERNAME = 'SET_USERNAME'
export const setUsername = actionFactory(SET_USERNAME)

export const ADD_CHATROOM = 'ADD_CHATROOM'
export const addChatroom = actionFactory(ADD_CHATROOM)

export const SEND_MESSAGE = 'SEND_MESSAGE'
export const sendMessage = actionFactory(SEND_MESSAGE)

// list of all client -> server actions
export const clientToServerActions = [SET_USERNAME, ADD_CHATROOM, SEND_MESSAGE]


// server-initiated actions

export const SRV_SEND_MESSAGE = 'SRV_SEND_MESSAGE'
export const sendMessageFromServer = actionFactory(SRV_SEND_MESSAGE)

export const SRV_REFRESH = 'SRV_REFRESH'
export const refreshFromServer = (what, payload) => ({
  type: SRV_REFRESH,
  what: what,
  payload: Array.from(payload)
})