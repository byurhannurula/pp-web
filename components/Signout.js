import React from 'react'

import { Mutation } from 'react-apollo'
import { DropdownItem } from 'reactstrap'
import { GET_USER, SIGNOUT_MUTATION } from '../graphql'

const Signout = () => (
  <Mutation mutation={SIGNOUT_MUTATION} refetchQueries={[{ query: GET_USER }]}>
    {signOut => (
      <DropdownItem href="/login" onClick={signOut}>
        <i className="ni ni-user-run" />
        <span>Logout</span>
      </DropdownItem>
    )}
  </Mutation>
)

export default Signout
