import R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

import Chat from '../components/Chat.js'
import Messages from './MessagesContainer.js'
import Messagebox from '../components/Messagebox.js'
import { sendMessage } from '../actions.js'


const ChatContainer = ({ dispatch, username }) => {
  var action = R.compose(dispatch, R.curry(sendMessage)(username))

  return (
    <Chat>
      <Messages />
      <Messagebox action={action} />
    </Chat>
  )
}

const mapStateToProps = (state, ownProps) => ({
  username: state.username
})

export default connect(mapStateToProps)(ChatContainer)
