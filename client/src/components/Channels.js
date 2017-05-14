import React from 'react'
import PropTypes from 'prop-types'

import '../style.css'
import Channel from './Channel.js'


const Channels = ({ channels, children }) => {
  return (
    <ul className="channelList">
      {channels.map(channel => <Channel key={channel} id={channel} /> )}
      {children}
    </ul>
  )
}

Channels.propTypes = {
  channels: PropTypes.array
}

export default Channels