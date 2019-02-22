import React from "react"
import { graphql } from "gatsby"
import Image from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlexBox from '../components/FlexBox'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import EmailPrompt from '../components/EmailPrompt'
import Footer from '../components/Footer'

export default function IndexPage({ data }) {
  const imageSource = data.meImage.childImageSharp.fluid
  return (
    <Layout>
      <SEO title="I'm Tim Glorioso" />
      <Image
        fluid={imageSource}
        css={`
          top: 80px;
          flex: auto;
          max-width: 500px;
          @media (max-width: 1080px) {
            flex: none;
            width: 100%;
            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.25);
          }
          @media (min-width: 1081px) {
            box-shadow: -4px 4px 20px 0 rgba(0, 0, 0, 0.25);
          }
        `}
      />
      <Content
        css={`
          flex: initial;
          max-width: 500px;
          @media (max-width: 1080px) {
            min-height: calc(100vh - (500px - 32px));
          }
          @media (min-width: 1081px) {
            min-height: 100vh;
          }
        `}
      />
    </Layout>
  )
}

const Content = ({ className }) => (
  <FlexBox flexDirection='column' justifyContent='space-between' className={className}>
    <Header
      css={`
        @media (max-width: 1080px) {
          position: absolute;
          top: 0;
          align-self: center;
        }
        @media (min-width: 1081px) {
          margin-left: -16px;
        }
      `}
    />
    <main
      css={`
        flex: auto;
        @media (max-width: 1080px) {
          position: relative;
          top: 80px;
          align-self: center;
          margin-bottom: 64px;
        }
      `}
    >
      <Heading>Hello, world.</Heading>
      <Paragraph>I'm Tim Glorioso. With design and code, I create digital experiences that make life a little better—at least by being fun.</Paragraph>
      <EmailPrompt
        css={`
          @media (max-width: 1080px) {
            margin: 0 auto;
          }
        `}
      />
    </main>
    <Footer
      css={`
        @media (max-width: 1080px) {
          position: relative;
          top: 80px;
          align-self: center;
        }
        @media (min-width: 1081px) {
          margin-left: -16px;
        }
      `}
    />
  </FlexBox>
)

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
