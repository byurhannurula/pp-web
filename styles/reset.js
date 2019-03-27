import { css } from 'styled-components'

const reset = css`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    line-height: 1.15;
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
  }

  body {
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  p,
  hr {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input,
  select,
  textarea,
  button {
    font: inherit;
    color: inherit;
  }
`

export default reset
