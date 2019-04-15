import React from 'react'
import { Query } from 'react-apollo'
import { GET_USER } from '../graphql'

const User = props => (
  <Query {...props} query={GET_USER}>
    {payload => props.children(payload)}
  </Query>
)

export default User
