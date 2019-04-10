import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

export const Header = () => (
  <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
    <Container className="d-flex align-items-center" fluid>
      <Row>
        <Col lg="8" md="10">
          <h1 className="display-2 text-white">Hello Jesse</h1>
          <p className="text-white mt-0 mb-5">
            This is your profile page. You can see the progress. This is your
            profile page. You can see the progress.
          </p>
          <Button type="button" color="primary">
            Create new project
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
)
