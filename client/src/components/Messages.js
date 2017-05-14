import React from 'react'
import PropTypes from 'prop-types'
import '../style.css'

import Message from './Message.js'


const Messages = ({ messages }) => {
  return (
      <div className="chatArea">
        <ul className="messages">
          {messages.map(message => <Message {...message} /> )}
        </ul>
      </div>
  )
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Messages