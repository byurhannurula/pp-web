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

export const GET_ROOMS = gql`
  query getRooms {
    rooms {
      id
      name
      cardValues
      createdBy
      users
      date
      createdAt
      updatedAt
    }
  }
`
