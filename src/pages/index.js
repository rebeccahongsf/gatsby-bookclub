import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = prop => {
  console.log(prop)
  return (
    <Layout>
      {prop.data.allBook.edges.map(edge => (
        <div key={edge.node.id}>
          <h2>
            {edge.node.title} — <span>{edge.node.author.name}</span>
          </h2>
          <div>{edge.node.summary}</div>
        </div>
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
