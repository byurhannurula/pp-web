import gql from 'graphql-tag'

export const GET_USER = gql`
  query getUser {
    me {
      id
      name
      bio
      email
      avatar
      sessions {
        id
        name
        createdBy {
          id
          name
          avatar
        }
        members {
          id
          name
          avatar
        }
      }
      createdAt
    }
  }
`

export const GET_SESSIONS = gql`
  query getSessions {
    getSessions {
      id
      name
      cardSet
      createdBy {
        id
        name
      }
      members {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`
