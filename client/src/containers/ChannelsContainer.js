import R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

import ChannelArea from '../components/ChannelArea.js'
import Channels from '../components/Channels.js'
import Channelbox from '../components/Channelbox.js'
import { TYPE_USER, TYPE_ROOM, Channel, changeChannel, addChatroom } from '../actions.js'


const ChannelsContainer = (props) => {
  return (
    <ChannelArea>

      <Channels
        title="Chatrooms"
        channels={props.chatrooms}
        action={props.changeChannelRoomAction}
      >
        <Channelbox action={props.addChatroomAction} />
      </Channels>

      <Channels
        title="Active users"
        channels={props.usernames}
        action={props.changeChannelUserAction}
      />

    </ChannelArea>
  )
}

const mapStateToProps = (state, ownProps) => ({
  chatrooms: state.chatrooms,
  usernames: state.usernames
})

const mapDispatchToProps = {
  addChatroomAction: addChatroom,
  changeChannelRoomAction: R.compose(changeChannel, R.curry(Channel)(TYPE_ROOM)),
  changeChannelUserAction: R.compose(changeChannel, R.curry(Channel)(TYPE_USER))
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsContainer)
