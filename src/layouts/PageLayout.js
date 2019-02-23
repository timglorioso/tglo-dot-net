import React from 'react'
import { createGlobalStyle } from 'styled-components'

import FlexBox from '../components/FlexBox'
import Header from '../components/Header'
import Main from '../components/Main'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Neutral', sans-serif;
  }
`

// const routes = [
//   { pathname: '/', title: 'about' },
//   { pathname: '/blog', title: 'blog' }
// ]

export default function PageLayout({ pageContext, location, children }) {
  console.log(pageContext)
  const image = pageContext.image || { src: '' }
  return (
    <React.Fragment>
      <GlobalStyle />
      <FlexBox isResponsive>
        <Header routes={[]} currentPath={location.pathname} image={image} />
        <Main>
          {children}
        </Main>
      </FlexBox>
    </React.Fragment>
  )
}
