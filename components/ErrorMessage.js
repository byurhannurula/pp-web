import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const ErrorStyles = styled.div`
  padding: 16px;
  background: white;
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
`

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null
  // if (
  //   error.networkError &&
  //   error.networkError.result &&
  //   error.networkError.result.errors.length
  // ) {
  //   return error.networkError.result.errors.map((err, i) => (
  //     <ErrorStyles key={i}>
  //       <p data-test="graphql-error">
  //         <strong>Shoot!</strong>
  //         {err.message.replace('GraphQL error: ', '')}
  //       </p>
  //     </ErrorStyles>
  //   ))
  // }

  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        {error.message.replace('GraphQL error: ', '')}
        {/* {error.graphQLErrors[0].extensions.exception.details[0].message} */}
      </p>
    </ErrorStyles>
  )
}

DisplayError.defaultProps = {
  error: {},
}

DisplayError.propTypes = {
  error: PropTypes.object,
}

export default DisplayError
