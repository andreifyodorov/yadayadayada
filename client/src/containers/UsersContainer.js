import { connect } from 'react-redux'
import Users from '../components/Users.js'


const mapStateToProps = (state, ownProps) => ({
    users: state.users
})

export default connect(mapStateToProps)(Users)