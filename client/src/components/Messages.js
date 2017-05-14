import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style.css'
import Message from './Message.js'


export default class Messages extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired
  }

  componentDidUpdate() {
    this.refs.area.scrollTop = this.refs.area.scrollHeight
  }

  render() {
    let { messages } = this.props

    return (
      <div className="messages" ref="area">
        <ul>
          {messages.map(message => <Message {...message} />)}
        </ul>
      </div>
    )
  }
}
