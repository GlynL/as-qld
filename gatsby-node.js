/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require('gatsby-source-filesystem')

const path = require('path')

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions

//   const eventPostTemplate = path.resolve(`src/templates/eventTemplate.js`)

//   return graphql(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       console.log('slug', node.fields.slug)
//       createPage({
//         path: 'events' + node.fields.slug,
//         component: eventPostTemplate,
//         context: {
//           id: node.id,
//         }, // additional data can be passed via context
//       })
//     })
//   })
// }

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
