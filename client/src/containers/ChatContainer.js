import R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

import Chat from '../components/Chat.js'
import Header from './HeaderContainer.js'
import Channels from './ChannelsContainer.js'
import Messages from './MessagesContainer.js'
import Messagebox from '../components/Messagebox.js'
import { Message, sendMessage } from '../actions.js'


const ChatContainer = ({ dispatch, messageAction }) => {
  return (
    <Chat>
      <Header />
      <Channels />
      <Messages />
      <Messagebox action={messageAction} autoFocus />
    </Chat>
  )
}

// const mapStateToProps = (state, ownProps) => ({
//   args: [state.username, state.channel]
// })

const mapDispatchToProps = (dispatch, ownProps) => {
  let message = R.curry(Message)(ownProps.username, ownProps.channel, R.__)
  let messageAction = R.compose(dispatch, sendMessage, message)
  return { messageAction }
}

export default connect(undefined, mapDispatchToProps)(ChatContainer)
