import React from 'react'
import { Link, graphql } from 'gatsby'

export default function BlogIndexPage({ data }) {
  const posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <Link key={edge.node.id} to={edge.node.frontmatter.path} />)
  return (
    <React.Fragment>{posts}</React.Fragment>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { isBlogPost: { eq: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
