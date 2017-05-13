import { Component } from 'react'
import PropTypes from 'prop-types'


export default class Input extends Component {
  static propTypes = {
    action: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.refs.input.focus()
  }

  _handleSubmit = e => {
    e.preventDefault()
    let input = this.refs.input
    if (input.value) {
      this.props.action(input.value)
      input.value = ''
    }
  }
}