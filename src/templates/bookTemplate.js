import React from "react"
import Layout from "../components/layout"

import BookItem from "../components/BookItem"

const BookTemplate = prop => {
  return (
    <Layout>
      <BookItem
        bookTitle={prop.pageContext.title}
        bookCover={prop.pageContext.imageUrl}
        bookSummary={prop.pageContext.summary}
        authorName={prop.pageContext.author.name}
      />
    </Layout>
  )
}

export default BookTemplate
