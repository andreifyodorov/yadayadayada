import R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

import Chat from '../components/Chat.js'
import Messages from './MessagesContainer.js'
import Messagebox from '../components/Messagebox.js'
import Users from './UsersContainer.js'
import { Message, sendMessage } from '../actions.js'


const ChatContainer = ({ dispatch, args }) => {
  let message = R.curry(Message)(...args, R.__)
  let action = R.compose(dispatch, sendMessage, message)

  return (
    <Chat>
      <Messages />
      <Messagebox action={action} />
    </Chat>
  )
}

const mapStateToProps = (state, ownProps) => ({
  args: [state.username, state.channel]
})

export default connect(mapStateToProps)(ChatContainer)
