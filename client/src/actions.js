export const SET_USERNAME = 'SET_USERNAME'

export const setUsername = (username) => ({
  type: SET_USERNAME,
  username
})


export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SRV_SEND_MESSAGE = 'SRV_SEND_MESSAGE'

export const sendMessage = (username, text) => ({
  type: SEND_MESSAGE,
  message: { username, text }
})


export const RemoteActions = [SET_USERNAME, SEND_MESSAGE]