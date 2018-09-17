import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBooks } from '../actions/index.js'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { input: ''}
  }

  handleInputChange = event => {
    this.setState({ input: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.props.fetchBooks(this.state.input)
    this.setState({ input: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          value={this.state.input}
          onChange={this.handleInputChange}
          placeholder="Search for a book to add to your shelf"
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBooks }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
