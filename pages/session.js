import React from 'react'
import SessionComponent from '../components/views/SessionComponent'

const SessionPage = ({ id }) => <SessionComponent id={id} />

SessionPage.getInitialProps = async ({ query }) => {
  const { session } = query
  console.log(query)
  return { id: session }
}

export default SessionPage
