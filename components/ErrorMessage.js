import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const ErrorStyles = styled.div`
  padding: 2rem;
  background: white;
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null

  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message}
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
