import React from 'react'

import '../style.css'
import InputComponent from './base/InputComponent.js'


export default class Messagebox extends InputComponent {
  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="messagebox">
          <input placeholder="Type here..." ref="input" />
        </div>
      </form>
    )
  }
}
