export const FETCH_BOOKS = 'FETCH_BOOKS'

export function fetchBooks(input) {
  const url = 'http://localhost:3001/api/v1/book_search'

  const request = fetch(url, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input })
  })
  .then(res => res.json())

  return {
    type: FETCH_BOOKS,
    payload: request
  }

}
