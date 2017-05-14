import { connect } from 'react-redux'

import Messages from '../components/Header.js'


const mapStateToProps = (state, ownProps) => ({
  channel: state.channel
})

export default connect(mapStateToProps)(Messages)