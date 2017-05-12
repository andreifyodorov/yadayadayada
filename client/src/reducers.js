import { combineReducers } from 'redux'


const loginPageReducer = (state = '', action) => {
  if (action.type === "SET_USERNAME") {
    return action.username
  }
  return state
}


export default combineReducers({
  username: loginPageReducer
})
