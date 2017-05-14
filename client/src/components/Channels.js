import React from 'react'
import PropTypes from 'prop-types'

import '../style.css'
import Channel from './Channel.js'


const Channels = ({ title, channels, action, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
      <ul className="channelsList">
        {channels.map(channel =>
          <Channel
            key={channel}
            id={channel}
            onClick={() => action(channel)} />
        )}
      </ul>
    </div>
  )
}

Channels.propTypes = {
  channels: PropTypes.array
}

export default Channels