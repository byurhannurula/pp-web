import React, { useState } from 'react'
import { Mutation } from 'react-apollo'

import { Button, Card, CardBody, Form, Col } from 'reactstrap'
import { InputField } from '../common'
import AuthLayout from '../layout/AuthLayout'
import Error from '../ErrorMessage'

import { GET_USER, SIGNIN_MUTATION } from '../../graphql'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Mutation mutation={SIGNIN_MUTATION} refetchQueries={[{ query: GET_USER }]}>
      {(signIn, { error, loading }) => (
        <AuthLayout>
          <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0 mt-4">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Sign in with credentials</small>
                </div>
                <Form
                  role="form"
                  method="post"
                  onSubmit={async e => {
                    e.preventDefault()
                    await signIn({
                      variables: {
                        email: email.value,
                        password: password.value,
                      },
                    })
                  }}
                >
                  <fieldset disabled={loading} aria-busy={loading}>
                    <Error error={error} />
                    <InputField
                      type="email"
                      name="email"
                      placeholder="Email"
                      iconClassName="ni ni-email-83"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <InputField
                      type="password"
                      name="password"
                      placeholder="Password"
                      iconClassName="ni ni-lock-circle-open"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
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

export default SignIn
