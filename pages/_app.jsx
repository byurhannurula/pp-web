import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'

import checkLoggedIn from '../lib/checkLoggedIn'
import withApollo from '../lib/withApollo'
import redirect from '../lib/redirect'
import { isAuthPath } from '../utils/isAuth'

import '../styles/vendor/fontawesome/all.min.css'
import '../styles/vendor/nucleo/css/nucleo.css'
import '../styles/main/main.scss'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    const { loggedInUser } = await checkLoggedIn(ctx.apolloClient)

    // Check whether path is an "authorization" specific page
    const auth = isAuthPath(ctx.asPath)

    if (!loggedInUser.me) {
      // User is not logged in. Redirect to Login.
      if (!auth) redirect(ctx, '/login')
    } else if (auth) {
      // User is logged in. Redirect to Dashboard.
      redirect(ctx, '/')
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, loggedInUser }
  }

  render() {
    const { Component, pageProps, apolloClient, loggedInUser } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} loggedInUser={loggedInUser} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
