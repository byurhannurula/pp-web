import { GET_USER } from '../graphql'

export default apolloClient =>
  apolloClient
    .query({ query: GET_USER })
    .then(({ data }) => {
      return { loggedInUser: data }
    })
    .catch(() => {
      return { loggedInUser: {} }
    })
