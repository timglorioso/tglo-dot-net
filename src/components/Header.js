import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import FlexBox from './FlexBox'

export default function Header({ className }) {
  return (
    <StyledHeader className={className}>
      <nav css={`height: 100%;`}>
        <FlexBox
          as='ol'
          alignItems='center'
          itemSpacing='16px'
          fillWidth
          fillHeight
          css={`
            list-style: none;
            margin: 0;
          `}
        >
          <NavigationItem><StyledLink to='/'>about</StyledLink></NavigationItem>
          <NavigationItem><StyledLink to='/blog'>blog</StyledLink></NavigationItem>
          <NavigationItem><StyledLink to='/stuff'>stuff</StyledLink></NavigationItem>
        </FlexBox>
      </nav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  max-width: 500px;
  height: 80px;
  @media (min-width: 1081px) {
    width: 100%;
  }
`

const NavigationItem = styled.li`
  margin-bottom: 0;
  transform: translateY(0);
  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    transform: translateY(-3px);
  }
`

const StyledLink = styled(Link)`
  padding: 16px;
  color: ${props => props.isSelected ? '#101010' : '#2D72D9'};
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
`
