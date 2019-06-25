import React, { useState } from 'react'
import { Mutation, withApollo } from 'react-apollo'
import Link from 'next/link'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Col,
} from 'reactstrap'
import redirect from '../../lib/redirect'
import { GithubButton, GoogleButton } from '../common'
import AuthLayout from '../layout/AuthLayout'
import Error from '../ErrorMessage'

import { GET_USER, SIGNUP_MUTATION } from '../../graphql'

const Register = ({ client }) => {
  const [state, setState] = useState({ name: '', email: '', password: '' })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <Mutation
      mutation={SIGNUP_MUTATION}
      refetchQueries={[{ query: GET_USER }]}
      onCompleted={data => {
        client.cache.reset().then(() => {
          redirect({}, '/')
        })
        console.log(data)
      }}
      onError={error => console.log(error)}
    >
      {(register, { error, loading }) => (
        <AuthLayout title="Register">
          <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-4">
                  <small>Sign up with</small>
                </div>
                <div className="text-center">
                  <GithubButton href="/" />
                  <GoogleButton href="/" />
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Or sign up with credentials</small>
                </div>
                <Form
                  role="form"
                  method="post"
                  onSubmit={async e => {
                    e.preventDefault()
                    e.stopPropagation()
                    await register({ variables: { ...state } })
                    setState({ name: '', email: '', password: '' })
                  }}
                >
                  <fieldset disabled={loading} aria-busy={loading}>
                    <Error error={error} />
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <input
                          type="text"
                          name="name"
                          value={state.name}
                          placeholder="Name"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <input
                          type="email"
                          name="email"
                          value={state.email}
                          placeholder="Email"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <input
                          type="password"
                          name="password"
                          value={state.password}
                          placeholder="Password"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <Row className="text-center">
                      <Col xs="12">
                        <span className="text-muted text-sm">
                          By signing up, you agree with the{' '}
                          <Link href="#pablo">
                            <a className="text-primary">Privacy Policy</a>
                          </Link>
                        </span>
                      </Col>
                    </Row>
                    <div className="text-center">
                      <Button
                        className="mt-4 px-4"
                        color="primary"
                        type="submit"
                      >
                        Create account
                      </Button>
                    </div>
                  </fieldset>
                </Form>
              </CardBody>
            </Card>
            <Row className="mt-3 mb-5">
              <Col className="text-center" xs="12">
                <Link href="/login">
                  <a className="text-primary">
                    <small>Already have an account?</small>
                  </a>
                </Link>
              </Col>
            </Row>
          </Col>
        </AuthLayout>
      )}
    </Mutation>
  )
}
export default withApollo(Register)
