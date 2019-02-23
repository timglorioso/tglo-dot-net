import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export default function BlogIndexPage({ data }) {
  const image = data.meImage.childImageSharp.fluid
  const posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <Link key={edge.node.id} to={edge.node.frontmatter.path} />)
  return (
    <Layout image={image}>{posts}</Layout>
  )
}

export const query = graphql`
  query {
    meImage: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
