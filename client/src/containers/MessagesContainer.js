import Immutable from 'immutable'
import { connect } from 'react-redux'

import Messages from '../components/Messages.js'


const mapStateToProps = (state, ownProps) => ({
  messages:
    state.messages.getIn(
      [state.channel.type, state.channel.id],
      Immutable.List()
    ).toJS()
})

export default connect(mapStateToProps)(Messages)