import React from 'react'

import '../style.css'
import InputComponent from './base/InputComponent.js'


export default class Channelbox extends InputComponent {
  render() {
    return (
      <div className="inputChatroom">
        <form onSubmit={this._handleSubmit}>
          <input placeholder="Start new chatroom..." ref="input" />
        </form>
      </div>
    )
  }
}
