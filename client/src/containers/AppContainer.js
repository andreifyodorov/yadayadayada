import R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

import Pages from '../components/Pages.js'
import Login from '../components/Login.js'
import Chat from './ChatContainer.js'
import { setUsername } from '../actions.js'


const AppContainer = ({ dispatch, loggedIn }) => {
  return (
    <Pages>
      { loggedIn
          ? <Chat />
          : <Login action={ R.compose(dispatch, setUsername) } /> }
    </Pages>
  )
}

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.username)
})

export default connect(mapStateToProps)(AppContainer)