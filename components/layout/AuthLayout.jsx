import React from 'react'
import { Container, Row } from 'reactstrap'

const AuthLayout = ({ children }) => (
  <div className="main-content">
    {/* Page content */}
    <Container className="mt-6">
      <Row className="justify-content-center">{children}</Row>
    </Container>
  </div>
)

export default AuthLayout
