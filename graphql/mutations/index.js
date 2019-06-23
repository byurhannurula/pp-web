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

export const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION(
    $id: String!
    $name: String
    $email: String
    $bio: String
  ) {
    updateUser(id: $id, name: $name, bio: $bio, email: $email) {
      id
      name
      email
      avatar
    }
  }
`

export const START_SESSION_MUTATION = gql`
  mutation START_SESSION_MUTATION($name: String!, $cardSet: String) {
    startSession(name: $name, cardSet: $cardSet) {
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
  mutation DELETE_SESSION_MUTATION($sessionId: String!) {
    deleteSession(sessionId: $sessionId) {
      message
    }
  }
`

export const ADD_POLL_MUTATION = gql`
  mutation ADD_POLL_MUTATION(
    $session: String!
    $topic: String!
    $description: String
  ) {
    addPoll(session: $session, topic: $topic, description: $description) {
      id
      topic
      description
    }
  }
`

export const INVITE_MEMBER_MUTATION = gql`
  mutation INVITE_MEMBER_MUTATION($sessionId: String!, $email: String!) {
    inviteMember(sessionId: $sessionId, email: $email) {
      message
    }
  }
`

export const DELETE_MEMBER_MUTATION = gql`
  mutation DELETE_MEMBER_MUTATION($sessionId: String!, $userId: String!) {
    deleteMember(sessionId: $sessionId, userId: $userId) {
      message
    }
  }
`

export const ADD_VOTE_MUTATION = gql`
  mutation ADD_VOTE_MUTATION(
    $pollId: String!
    $userId: String!
    $value: String!
  ) {
    addVote(pollId: $pollId, userId: $userId, value: $value) {
      id
      value
      poll {
        id
        topic
      }
      user {
        id
        name
      }
    }
  }
`
