import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../style.css'


class ChatPage extends Component {
  componentDidMount() {
    this.refs.input.focus()
  }

  render() {
    return (
      <li className="chat page">
        <div className="chatArea">
          <ul className="messages"></ul>
        </div>
        <form>
            <input className="inputMessage" placeholder="Type here..." ref="input" />
        </form>
      </li>
    )
  }
}


export default connect(
  undefined,
  // mapDispatchToProps
  // (dispatch, ownProps) => ({
  //   onSubmit: (username, e) => {
  //     e.preventDefault()
  //     if (username) {
  //       dispatch(setUsername(username))
  //     }
  //   }
  // })
)(ChatPage)
