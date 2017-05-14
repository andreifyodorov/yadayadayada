import R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

import ChannelTypes from '../components/ChannelTypes.js'
import Channels from '../components/Channels.js'
import Channelbox from '../components/Channelbox.js'
import { TYPE_USER, TYPE_ROOM, Channel, changeChannel, addChatroom } from '../actions.js'


const ChannelsContainer = ({ chatrooms, usernames, addChatroomAction, changeChannelAction }) => {
  return (
    <ChannelTypes>
      <Channels channels={chatrooms}>
        <Channelbox action={addChatroomAction} />
      </Channels>

      <Channels channels={usernames} />
    </ChannelTypes>
  )
}

const mapStateToProps = (state, ownProps) => ({
  chatrooms: state.chatrooms,
  usernames: state.usernames
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addChatroomAction: R.compose(dispatch, addChatroom),
  changeChannelAction: {
    chatroom: R.compose(dispatch, changeChannel, R.curry(Channel)(TYPE_ROOM, R.__)),
    username: R.compose(dispatch, changeChannel, R.curry(Channel)(TYPE_USER, R.__))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsContainer)
