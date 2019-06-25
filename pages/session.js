import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import SessionComponent from '../components/views/SessionComponent'

const SessionPage = ({ id }) => (
  <ApolloConsumer>
    {client => <SessionComponent id={id} client={client} />}
  </ApolloConsumer>
)

SessionPage.getInitialProps = async ({ query }) => {
  const { session } = query
  return { id: session }
}

export default SessionPage
