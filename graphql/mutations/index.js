import gql from 'graphql-tag'

export const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      name
      email
    }
  }
`

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signUp(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`

export const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signOut
  }
`

export const START_SESSION_MUTATION = gql`
  mutation START_SESSION_MUTATION(
    $name: String!
    $cardSet: String
    $polls: String
  ) {
    startSession(name: $name, cardSet: $cardSet, polls: $polls) {
      id
      name
    }
  }
`

export const UPDATE_SESSION_MUTATION = gql`
  mutation UPDATE_SESSION_MUTATION(
    $id: String!
    $name: String
    $cardSet: String
  ) {
    updateSession(id: $id, name: $name, cardSet: $cardSet) {
      id
      name
      cardSet
    }
  }
`

export const DELETE_SESSION_MUTATION = gql`
  mutation DELETE_SESSION_MUTATION($id: String!) {
    deleteSession(id: $id) {
      message
    }
  }
`
