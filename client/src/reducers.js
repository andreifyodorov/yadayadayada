import { combineReducers } from 'redux'


const LoginPage = (state = '', action) => {
  if (action.type === "SET_USERNAME") {
    return action.username
  }
  return state
}


let messageId = 0

const MessagesView = (state = [], action) => {
  if (action.type === "SEND_MESSAGE") {
    messageId++
    return [
      ...state,
      {id: messageId, username: action.username, text: action.text}
    ]
  }
  return state
}


export default combineReducers({
  username: LoginPage,
  messages: MessagesView
})
