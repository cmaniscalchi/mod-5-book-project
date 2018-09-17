import React, { Component } from 'react'
import SearchBar from '../containers/search_bar'
import BookSearchList from '../components/book_search_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <BookSearchList />
      </div>
    )
  }
}
