import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style.css'

import Message from './Message.js'


class Messages extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
  }

  render() {
    let messages = this.props.messages

    return (
        <div className="chatArea">
          <ul className="messages">
            {messages.map(message =>
              <Message
                key={message.id}
                {...message}
              />
            )}
          </ul>
        </div>
    )
  }
}

export default Messages