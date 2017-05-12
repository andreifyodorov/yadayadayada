import { connect } from 'react-redux'
import { setUsername } from '../actions.js'
import Login from '../components/Login.js'


export default connect(undefined, {
  action: setUsername
})(Login)