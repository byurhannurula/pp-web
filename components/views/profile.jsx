import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { adopt } from 'react-adopt'
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

import { UPDATE_USER_MUTATION, GET_USER } from '../../graphql'

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  updateUser: ({ render }) => (
    <Mutation
      mutation={UPDATE_USER_MUTATION}
      refetchQueries={[{ query: GET_USER }]}
    >
      {render}
    </Mutation>
  ),
})

const Profile = () => {
  const [state, setState] = useState({ name: '', email: '', bio: '' })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <Composed>
      {({ user, updateUser }) => {
        const me = user.data ? user.data.me : ''

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
              <span className="mask bg-gradient-default opacity-8" />
              <Container className="d-flex align-items-center" fluid>
                <Row>
                  <Col lg="12" md="10">
                    <h1 className="display-2 text-white">Hello {me.name}</h1>
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
                        <hr className="my-4" />
                        <p>{me.bio}</p>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="order-xl-1" xl="8">
                  <Card className="bg-secondary shadow">
                    <CardHeader className="bg-white border-0">
                      <Row className="align-items-center">
                        <Col xs="8">
                          <h3 className="mb-0">My Account</h3>
                        </Col>
                        <Col className="text-right" xs="4">
                          <Button
                            className="px-3 py-2"
                            color="primary"
                            size="sm"
                          >
                            Update Account
                          </Button>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Form
                        method="post"
                        onSubmit={async e => {
                          e.preventDefault()
                          await updateUser({
                            variables: {
                              id: me.id,
                              ...state,
                            },
                          })
                          setState({ ...state })
                        }}
                      >
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
                                  onChange={handleChange}
                                  placeholder={me.name}
                                  value={state.name}
                                  id="input-name"
                                  name="name"
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
                                  name="email"
                                  value={state.email}
                                  onChange={handleChange}
                                  className="form-control-alternative"
                                  placeholder={me.email}
                                  type="email"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-password"
                                >
                                  Password
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="Password"
                                  id="input-password"
                                  type="password"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-confirm-password"
                                >
                                  Confirm Password
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="Password"
                                  id="input-confirm-password"
                                  type="password"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        {/* Description */}
                        <h6 className="heading-small text-muted mb-3">
                          About me
                        </h6>
                        <div className="pl-lg-4">
                          <FormGroup>
                            <label>About Me</label>
                            <Input
                              className="form-control-alternative"
                              placeholder={me.bio}
                              onChange={handleChange}
                              value={state.bio}
                              type="textarea"
                              name="bio"
                              rows="4"
                            />
                          </FormGroup>
                        </div>
                        <Button className="px-3 py-2" color="primary" size="sm">
                          Update Account
                        </Button>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Layout>
        )
      }}
    </Composed>
  )
}
export default Profile
