import React from 'react'
import { connect } from 'react-redux'

import Chat from '../components/Chat.js'
import Channels from './ChannelsContainer.js'
import MessagingArea from './MessagingAreaContainer.js'


const ChatContainer = () => {
  return (
    <Chat>
      <Channels />
      <MessagingArea />
    </Chat>
  )
}

export default connect()(ChatContainer)
