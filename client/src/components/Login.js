import React from 'react'

import '../style.css'
import InputComponent from './base/InputComponent.js'


export default class Login extends InputComponent {
  render() {
    return (
      <li className="login page">
        <div className="form">
          <h3 className="title">
            What&apos;s your nickname?
          </h3>
        <form onSubmit={this.handleSubmit}>
            <input className="usernameInput" type="text" maxLength="14" ref="input" />
          </form>
        </div>
      </li>
    )
  }
}
