import React from 'react'

import { Button, Card, CardHeader, CardBody, Form, Row, Col } from 'reactstrap'
import { InputField, GithubButton, GoogleButton } from '../components/common'
import AuthLayout from '../components/layout/AuthLayout'

const Index = () => (
  <AuthLayout>
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
          <Form role="form">
            <InputField placeholder="Name" iconClassName="ni ni-hat-3" />
            <InputField
              type="email"
              placeholder="Email"
              iconClassName="ni ni-email-83"
            />
            <InputField
              type="password"
              placeholder="Password"
              iconClassName="ni ni-lock-circle-open"
            />
            <Row className="my-4">
              <Col xs="12">
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id="customCheckRegister"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheckRegister"
                  >
                    <span className="text-muted">
                      I agree with the{' '}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>
              </Col>
            </Row>
            <div className="text-center">
              <Button className="mt-4 px-4" color="primary" type="button">
                Create account
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  </AuthLayout>
)

export default Index
