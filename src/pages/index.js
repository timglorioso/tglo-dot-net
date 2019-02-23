import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import EmailPrompt from '../components/EmailPrompt'

export default function IndexPage({ data }) {
  const image = data.meImage.childImageSharp.fluid
  return (
    <Layout image={image}>
      <SEO title="I'm Tim Glorioso" />
      <Heading>Hello, world.</Heading>
      <Paragraph>I'm Tim Glorioso. With design and code, I create digital experiences that make life a little better—at least by being fun.</Paragraph>
      <EmailPrompt
        css={`
          @media (max-width: 1080px) {
            margin: 0 auto;
          }
        `}
      />
    </Layout>
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
  }
`
