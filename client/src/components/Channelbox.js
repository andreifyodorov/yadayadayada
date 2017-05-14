import React from 'react'

import '../style.css'
import InputComponent from './base/InputComponent.js'


export default class Channelbox extends InputComponent {
  render() {
    return (
        <li>
          <form onSubmit={this._handleSubmit}>
              <input className="inputChatroom" placeholder="Start chatroom..." ref="input" />
          </form>
        </li>
    )
  }
}
