import React from 'react'
import Head from 'next/head'

const Meta = ({ title }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title} &mdash; PokerPlanning</title>
  </Head>
)

export default Meta
