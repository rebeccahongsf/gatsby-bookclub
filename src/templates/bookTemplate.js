import React from "react"
import Layout from "../components/layout"

import BookItem from "../components/BookItem"

const BookTemplate = prop => {
  console.log(prop.data)
  return (
    <Layout>
      <BookItem
        bookTitle={prop.data.book.title}
        bookCover={prop.data.book.localImage.childImageSharp.fixed}
        bookSummary={prop.data.book.summary}
        authorName={prop.data.book.author.name}
      />
    </Layout>
  )
}

export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: { eq: $bookId }) {
      id
      summary
      title
      localImage {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      author {
        id
        name
      }
    }
  }
`

export default BookTemplate
