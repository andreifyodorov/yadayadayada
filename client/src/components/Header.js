import React from 'react'
import PropTypes from 'prop-types'

import { TYPE_USER, TYPE_ROOM } from '../actions.js'
import '../style.css'


const Header = ({ channel: {type, id} }) => {
  return (
    <div className="header">
      {type === TYPE_USER ? 'Private chat with' : 'Public room'}
      {' '}
      <b>{id}</b>
    </div>
  )
}

Header.propTypes = {
  channel: PropTypes.shape({
    type: PropTypes.oneOf([TYPE_USER, TYPE_ROOM]).isRequired,
    id: PropTypes.string.isRequired,
  })
}

export default Header