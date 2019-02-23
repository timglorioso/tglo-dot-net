import React from "react"
import { graphql } from "gatsby"

import MarkdownContent from '../components/MarkdownContent'

export default function Template({ data }) {
  return (
    <MarkdownContent htmlAst={data.content.htmlAst} />
  )
}

export const query = graphql`
  query($path: String!) {
    content: markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
