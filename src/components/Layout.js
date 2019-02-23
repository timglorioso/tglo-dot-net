import React from "react"
import Image from 'gatsby-image'

import Header from './Header'
import Footer from './Footer'
import FlexBox from './FlexBox'
import "./layout.css"

export default function Layout({ image, children }) {
  return (
    <div
      css={`
        margin: 0 auto;
        max-width: 1080px;
        // height: 100vh;
        display: flex;
        @media (max-width: 1080px) {
          align-items: center;
          margin: 0 16px;
          flex-direction: column;
        }
        @media (min-width: 1081px) {
          align-items: flex-start;
          & > *:not(:last-child) {
            margin-right: 80px;
          }
        }
      `}
    >
      <Image
        fluid={image}
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
      <FlexBox
        flexDirection='column'
        justifyContent='space-between'
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
      >
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
          {children}
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
    </div>
  )
}
