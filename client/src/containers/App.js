import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginPage from './LoginPage.js'
import ChatPage from './ChatPage.js'


class App extends Component {
  render() {
    return (
      <ul className="pages">
        { this.props.userLoggedIn ? <ChatPage /> : <LoginPage /> }
      </ul>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  userLoggedIn: Boolean(state.username)
})

export default connect(mapStateToProps)(App)