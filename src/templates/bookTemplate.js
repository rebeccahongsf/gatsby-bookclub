import React from "react"
import Layout from "../components/layout"

const BookTemplate = prop => {
  return (
    <Layout>
      <h2>
        {prop.pageContext.title} — <span>{prop.pageContext.author.name}</span>
      </h2>
      <p>{prop.pageContext.summary}</p>
    </Layout>
  )
}

export default BookTemplate
