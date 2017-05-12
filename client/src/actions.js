export const setUsername = (username) => ({
  type: 'SET_USERNAME',
  username
})


export const sendMessage = (username, text) => ({
  type: 'SEND_MESSAGE',
  username,
  text
})