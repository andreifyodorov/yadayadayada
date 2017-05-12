import React from 'react'

import '../style.css'
import InputComponent from './base/InputComponent.js'


export default class Messagebox extends InputComponent {
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input className="inputMessage" placeholder="Type here..." ref="input" />
        </form>
    )
  }
}
