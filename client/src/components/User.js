import React from 'react'
import PropTypes from 'prop-types'

import '../style.css'


const User = ({ username }) => {
  return (
    <li className="message">
      {username}
    </li>
  )
}

User.propTypes = {
  username: PropTypes.string.isRequired
}

export default User