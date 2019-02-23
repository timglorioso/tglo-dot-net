import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import FlexBox from './FlexBox'

export default function Header({ routes, currentPath, image }) {
  return (
    <StyledHeader>
      <StyledNav>
        <FlexBox
          as='ol'
          alignItems='center'
          justifyContent='flex-end'
          itemSpacing='16px'
          fillWidth
          fillHeight
          css={`
            list-style: none;
            margin: 0;
            padding: 0;
            @media (max-width: 1200px) {
              justify-content: center;
            }
          `}
        >
          {routes.map(route =>
            <NavigationItem key={route.pathname}>
              <StyledLink
                to={route.pathname}
                isSelected={route.pathname === currentPath}
              >
                {route.title}
              </StyledLink>
            </NavigationItem>
          )}
        </FlexBox>
      </StyledNav>
      {image && image.src &&
        <FlexBox
          alignItems='center'
          justifyContent='center'
          fillWidth
          fillHeight
          css={`
            position: absolute;
            top: 0;
            left: 0;
          `}
        >
          <Image src={image.src} alt={image.alt || ''} />
        </FlexBox>
      }
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #101010;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media (max-width: 1200px) {
    position: relative;
    height: 50vh;
    min-height: 390px;
  }
  @media (min-width: 1201px) {
    position: fixed;
    width: 50vw;
    height: 100vh;
  }
`

const StyledNav = styled.nav`
  position: relative;
  z-index: 1;
  @media (max-width: 1200px) {
    margin-top: 20px;
    margin-right: 0;
  }
  @media (min-width: 1201px) {
    margin-top: 40px;
    margin-right: 40px;
  }
`

const NavigationItem = styled.li`
  margin-bottom: 0;
  padding: 0;
  transform: translateY(0);
  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    transform: translateY(-3px);
  }
`

function LinkAdapter({ isSelected, children, ...otherProps }) {
  return <Link {...otherProps}>{children}</Link>
}

const StyledLink = styled(LinkAdapter)`
  padding: 16px;
  opacity: ${props => props.isSelected ? '1' : '0.7'};
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  transition: opacity 700ms cubic-bezier(0.19, 1, 0.22, 1);
`

const Image = styled.img`
  @media (max-width: 432px) {
    width: 79px;
  }
  @media (min-width: 433px) and (max-width: 1200px) {
    width: 101px;
  }
  @media (min-width: 1201px) {
    width: 123px;
  }
`
