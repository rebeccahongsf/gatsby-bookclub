import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import BookItem from "../components/BookItem"

const IndexPage = prop => {
  console.log(prop)
  return (
    <Layout>
      {prop.data.allBook.edges.map(edge => (
        <BookItem
          key={edge.node.id}
          bookTitle={edge.node.title}
          bookCover={edge.node.localImage.publicURL}
          bookSummary={edge.node.summary}
          authorName={edge.node.author.name}
        >
          <Link to={`/book/${edge.node.id}`}>Join conversation!</Link>
        </BookItem>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allBook {
      edges {
        node {
          id
          summary
          title
          localImage {
            publicURL
          }
          author {
            id
            name
          }
        }
      }
    }
  }
`

export default IndexPage
