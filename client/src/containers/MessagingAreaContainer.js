import R from 'ramda'
import React from 'react'
import Immutable from 'immutable'
import { connect } from 'react-redux'

import Header from '../components/Header.js'
import MessagingArea from '../components/MessagingArea.js'
import Messages from '../components/Messages.js'
import Messagebox from '../components/Messagebox.js'
import { Message, sendMessage } from '../actions.js'


const MessagingAreaContainer = ({ dispatch, username, channel, messages }) => {
  let message = R.curry(Message)(username, channel, R.__)
  let messageAction = R.compose(dispatch, sendMessage, message)

  return (
    <MessagingArea>
      <Header channel={channel} />
      <Messages messages={messages} />
      <Messagebox action={messageAction} autoFocus />
    </MessagingArea>
  )
}

const mapStateToProps = ({ username, channel, messages }) => ({
  username,
  channel,
  messages: messages.getIn([channel.type, channel.id], Immutable.List()).toJS(),
})

export default connect(mapStateToProps)(MessagingAreaContainer)