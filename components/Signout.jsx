import React from 'react'
import { Mutation, withApollo } from 'react-apollo'
import { DropdownItem } from 'reactstrap'
import redirect from '../lib/redirect'
import { GET_USER, SIGNOUT_MUTATION } from '../graphql'

const Signout = ({ client }) => (
  <Mutation
    mutation={SIGNOUT_MUTATION}
    refetchQueries={[{ query: GET_USER }]}
    onCompleted={() => {
      client.cache.reset().then(() => {
        redirect({}, '/login')
      })
    }}
  >
    {signOut => (
      <DropdownItem href="/login" onClick={signOut}>
        <i className="ni ni-user-run" />
        <span>Logout</span>
      </DropdownItem>
    )}
  </Mutation>
)

export default withApollo(Signout)
