import React, { Component } from 'react'
import '../style.css'


export default class LoginPage extends Component {
  componentDidMount() {
    this.refs.input.focus()
  }

  handleSubmit = e => {
    e.preventDefault()
    let username = this.refs.input.value
    if (username) {
      this.props.action(username)
    }
  }

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

