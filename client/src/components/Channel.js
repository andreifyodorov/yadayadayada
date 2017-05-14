import React from 'react'
import PropTypes from 'prop-types'

import '../style.css'


const Channel = ({ id, onClick }) => <li onClick={ onClick }>{id}</li>

Channel.propTypes = {
  id: PropTypes.string.isRequired
}


export default Channel