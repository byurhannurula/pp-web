import React from 'react'
import { Container, Row } from 'reactstrap'
import Meta from '../Meta'

const AuthLayout = ({ children, title }) => (
  <div className="main-content">
    <Meta title={title} />
    {/* Page content */}
    <Container className="mt-6">
      <Row className="justify-content-center">{children}</Row>
    </Container>
  </div>
)

export default AuthLayout
