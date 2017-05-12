import React from 'react'
import PropTypes from 'prop-types'

import '../style.css'


const Message = ({ username, text }) => {
  return (
    <li className="message">
      <span className="username">
        {username}
      </span>
      <span className="messageBody">
        {text}
      </span>
    </li>
  )
}

Message.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Message