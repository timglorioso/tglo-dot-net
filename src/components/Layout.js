import React from "react"

import "./layout.css"

export default function Layout({ children }) {
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
      {children}
    </div>
  )
}
