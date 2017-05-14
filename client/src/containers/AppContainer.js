import React from 'react'
import { connect } from 'react-redux'

import Pages from '../components/Pages.js'
import Login from '../components/Login.js'
import Chat from './ChatContainer.js'
import { setUsername } from '../actions.js'


const AppContainer = ({ dispatch, loggedIn, chat, loginAction }) => {
  return (
    <Pages>
      { loggedIn
          ? <Chat {...chat} />
          : <Login action={loginAction} autoFocus /> }
    </Pages>
  )
}

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.username),
  chat: {
    username: state.username,
    channel: state.channel
  }
})

const mapDispatchToProps = {
  loginAction: setUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)