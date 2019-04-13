import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import {
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from 'reactstrap'
import redirect from '../../lib/redirect'
import AuthLayout from '../layout/AuthLayout'
import { GithubButton, GoogleButton } from '..'
import Error from '../ErrorMessage'

import { GET_USER, SIGNIN_MUTATION } from '../../graphql'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Mutation
      mutation={SIGNIN_MUTATION}
      refetchQueries={[{ query: GET_USER }]}
      onCompleted={data => {
        redirect({}, '/')
        console.log(data)
      }}
      onError={error => {
        // If you want to send error to external service?
        console.log(error)
      }}
    >
      {(login, { loading, error }) => (
        <AuthLayout title="Login">
          <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0 mt-4">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-4">
                  <small>Sign in with</small>
                </div>
                <div className="text-center">
                  <GithubButton href="/" />
                  <GoogleButton href="/" />
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>or sign in with credentials</small>
                </div>
                <Form
                  role="form"
                  method="post"
                  onSubmit={async e => {
                    e.preventDefault()
                    e.stopPropagation()
                    await login({
                      variables: {
                        email,
                        password,
                      },
                    })
                    setEmail('')
                    setPassword('')
                  }}
                >
                  <fieldset disabled={loading} aria-busy={loading}>
                    <Error error={error} />
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
                          value={email}
                          placeholder="Email"
                          className="form-control"
                          onChange={e => setEmail(e.target.value)}
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
                          value={password}
                          placeholder="Password"
                          className="form-control"
                          onChange={e => setPassword(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="text-center">
                      <Button
                        className="my-3 px-5"
                        color="primary"
                        type="submit"
                      >
                        Sign in
                      </Button>
                    </div>
                  </fieldset>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </AuthLayout>
      )}
    </Mutation>
  )
}

export default Login
