import React from 'react'
import styled from 'styled-components'

import FlexBox from './FlexBox'
import mailIcon from '../images/mail.svg'

export default function EmailPrompt({ className }) {
  return (
    <FlexBox
      as='a'
      href='mailto:glorioso.tim@gmail.com'
      alignItems='center'
      justifyContent='flex-start'
      itemSpacing='12px'
      css={`
        width: fit-content;
        margin-left: -16px;
        padding: 16px;
        text-decoration: none;
        transform: translateY(0);
        transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
        &:hover {
          transform: translateY(-3px);
        }
      `}
      className={className}
    >
      <Icon src={mailIcon} alt='my email' />
      <Prompt>say hi!</Prompt>
    </FlexBox>
  )
}

const Icon = styled.img`
  width: 32px;
  height: 20px;
`

const Prompt = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #101010;
`
