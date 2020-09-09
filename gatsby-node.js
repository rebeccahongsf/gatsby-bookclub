const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const bookTemplate = path.resolve("src/templates/bookTemplate.js")

  return graphql(`
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
  `).then(result => {
    if (result.error) {
      throw result.error
    }

    result.data.allBook.edges.forEach(book => {
      createPage({
        path: `/book/${book.node.id}`,
        component: bookTemplate,
        context: book.node,
      })
    })
  })
}
