/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react')

exports.onRenderBody = ({ pathname, setHeadComponents }) => {
  const fontScript = (
    <link
      key={pathname}
      rel="stylesheet"
      href="https://fonts.typotheque.com/WF-026258-008536.css"
      type="text/css"
    />
  )
  setHeadComponents([
    fontScript
  ])
}
