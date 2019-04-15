import React from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap'
import User from '../User'
import Layout from '../layout/Layout'

const Profile = () => (
  <User>
    {({ data }) => {
      const me = data ? data.me : null
      return (
        <Layout title="Profile">
          <div
            className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
            style={{
              minHeight: '300px',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          >
            {/* Mask */}
            <span className="mask bg-gradient-default opacity-8" />
            {/* Header container */}
            <Container className="d-flex align-items-center" fluid>
              <Row>
                <Col lg="7" md="10">
                  <h1 className="display-2 text-white">Hello {me.name}</h1>
                  <p className="text-white mt-0 mb-4">
                    This is your profile page. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Blanditiis odio impedit ipsum
                    unde dignissimos earum sapiente.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          {/* Page content */}
          <Container className="mt--7" fluid>
            <Row>
              <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                <Card className="card-profile shadow">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt={me.name}
                            src={me.avatar}
                            className="rounded-circle"
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <CardBody className="mt-8 pt-md-4">
                    <div className="text-center">
                      <h3>{me.name}</h3>
                      <div className="h5 mt-2">
                        Solution Manager - Creative Tim Officer
                      </div>
                      <hr className="my-4" />
                      <p>
                        Ryan — the name taken by Melbourne-raised,
                        Brooklyn-based Nick Murphy — writes, performs and
                        records all of his own music.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col className="order-xl-1" xl="8">
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">My account</h3>
                      </Col>
                      <Col className="text-right" xs="4">
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Settings
                        </Button>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        User information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-name"
                              >
                                Name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={me.name}
                                placeholder="Name"
                                id="input-name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Email address
                              </label>
                              <Input
                                id="input-email"
                                className="form-control-alternative"
                                placeholder={me.email}
                                type="email"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Layout>
      )
    }}
  </User>
)

export default Profile
