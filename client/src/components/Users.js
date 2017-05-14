import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style.css'

import User from './User.js'


class Users extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }

  render() {
    let users = this.props.users

    return (
        <div className="usersArea">
          <ul className="users">
            {users.map(user => {
              <User
                key={user.username}
                {...user}
              /> }
            )}
          </ul>
        </div>
    )
  }
}

export default Users