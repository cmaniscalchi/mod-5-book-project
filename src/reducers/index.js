import { combineReducers } from 'redux'
import BookSearchReducer from './reducer_book_search'

const rootReducer = combineReducers({
  bookSearchResults: BookSearchReducer
})

export default rootReducer
