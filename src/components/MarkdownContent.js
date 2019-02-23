import React from 'react'
import rehypeReact from 'rehype-react'
import styled from 'styled-components'

import Heading from './Heading'
import Paragraph from './Paragraph'
import EmailPrompt from './EmailPrompt'

export default function MarkdownContent({ htmlAst }) {
  return (
    <React.Fragment>{renderAst(htmlAst)}</React.Fragment>
  )
}

const CenteredContainer = styled.div`
  @media (min-width: 1201px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: Heading,
    p: Paragraph,
    "email-prompt": EmailPrompt,
    "centered-container": CenteredContainer
  },
}).Compiler
