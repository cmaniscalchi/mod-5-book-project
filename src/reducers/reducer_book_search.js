import { FETCH_BOOKS } from '../actions/index.js'

export default function(state = [], action) {
  console.log("Action received in Reducer:", action)
  switch (action.type) {
    case FETCH_BOOKS:
    return action.payload.GoodreadsResponse.search.results.work
    default:
    return state
  }
  return state
}
