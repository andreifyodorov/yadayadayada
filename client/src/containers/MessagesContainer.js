import { connect } from 'react-redux'
import Messages from '../components/Messages.js'


const mapStateToProps = (state, ownProps) => ({
    messages: state.messages
})

export default connect(mapStateToProps)(Messages)