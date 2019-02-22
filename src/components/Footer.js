import React from 'react'
import styled from 'styled-components'

export default function Footer({ className }) {
  return (
    <StyledFooter className={className}>
      <StyledAnchor
        href='https://creativecommons.org/licenses/by-sa/4.0/'
      >
        Licensed under CC BY-SA 4.0
      </StyledAnchor>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
`

const StyledAnchor = styled.a`
  display: inline-block;
  padding: 16px;
  color: #2D72D9;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transform: translateY(0);
  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    transform: translateY(-3px);
  }
  &::after {
    content: '↗';
    margin-left: 8px;
  }
`
