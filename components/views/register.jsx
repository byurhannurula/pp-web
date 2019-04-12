import React from 'react'
import { Mutation } from 'react-apollo'
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
  Col,
} from 'reactstrap'
import redirect from '../../lib/redirect'
import { GithubButton, GoogleButton } from '..'
import AuthLayout from '../layout/AuthLayout'
import Error from '../ErrorMessage'

import { GET_USER, SIGNUP_MUTATION } from '../../graphql'

const Register = () => {
  let name
  let email
  let password

  return (
    <Mutation
      mutation={SIGNUP_MUTATION}
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
      {(signUp, { error, loading }) => (
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
                    await signUp({
                      variables: {
                        name: name.value,
                        email: email.value,
                        password: password.value,
                      },
                    })

                    name.value = ''
                    email.value = ''
                    password.value = ''
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
                          placeholder="Name"
                          className="form-control"
                          ref={node => {
                            name = node
                          }}
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
                          placeholder="Email"
                          className="form-control"
                          ref={node => {
                            email = node
                          }}
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
                          placeholder="Password"
                          className="form-control"
                          ref={node => {
                            password = node
                          }}
                        />
                      </InputGroup>
                    </FormGroup>
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
          </Col>
        </AuthLayout>
      )}
    </Mutation>
  )
}
export default Register
