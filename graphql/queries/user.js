import gql from 'graphql-tag'

export const GET_USER = gql`
  query getUser {
    me {
      id
      name
      email
      avatar
      createdAt
      updatedAt
    }
  }
`
