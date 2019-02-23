const path = require('path')

exports.onCreateNode = ({ node, getNodes, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const postImage = node.frontmatter.image
    if (postImage) {
      const svgFiles = getNodes().filter(node => isNodeFileSVG(node))
      const image = svgFiles.find(file => file.relativePath === postImage)
      createNodeField({
        node: node,
        name: 'imageFile___NODE',
        value: image.id
      })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage, deletePage } = actions
  const contentTemplate = path.resolve(`src/templates/content.js`)
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              isBlogPost
              path
            }
            fields {
              imageFile {
                publicURL
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const image = {}
      if (node.fields && node.fields.imageFile) {
        image.src = node.fields.imageFile.publicURL
        image.alt = ''
      }
      createPage({
        path: node.frontmatter.path,
        component: contentTemplate,
        context: {
          image,
          isBlogPost: node.frontmatter.isBlogPost
        }
      })
    })
  })
}

function isNodeFileSVG(node) {
  const isFile = node.internal.type === 'File'
  if (isFile && node.internal.mediaType === 'image/svg+xml') {
    return true
  } else {
    return false
  }
}
