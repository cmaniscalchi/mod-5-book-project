import React from "react"

const Book = (props) => {
  console.log("Book props:", props)

  let year = props.book.original_publication_year
  let {title, image_url} = props.book.best_book
  let author = props.book.best_book.author.name



  return (
    <div>
      <img src={image_url} alt={title} />
      <h3>{year ? `${title} by ${author} (${year})` : `${title} by ${author}`}</h3>
    </div>
  )
}

export default Book
