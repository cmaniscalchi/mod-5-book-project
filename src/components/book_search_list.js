import React from 'react'
import { connect } from 'react-redux'
import Book from './book'

const BookSearchList = props => {
    return (
      <div>
        {props.bookSearchResults.map(book => <Book book={book} key={book.id} />)}
      </div>
    )
}

function mapStateToProps({ bookSearchResults }) {
  return { bookSearchResults }
}

export default connect(mapStateToProps)(BookSearchList)
