import React from 'react'
import { connect } from 'react-redux'

import Pages from '../components/Pages.js'
import Login from '../components/Login.js'
import Chat from './ChatContainer.js'
import { setUsername } from '../actions.js'


const AppContainer = ({ dispatch, loggedIn, loginAction }) => {
  return (
    <Pages>
      { loggedIn
          ? <Chat />
          : <Login action={loginAction} autoFocus /> }
    </Pages>
  )
}

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.username),
})

const mapDispatchToProps = {
  loginAction: setUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)