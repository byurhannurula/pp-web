import React from 'react'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

import { reset } from '../../../styles'

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    color: #141414;
    background-color: #fafbfc;
  }

  a {
    color: #141414;
  }
`

export const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>PokerPlanning</title>
    </Head>
    <GlobalStyle />
    {children}
  </>
)
