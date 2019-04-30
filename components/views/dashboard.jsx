/* eslint-disable react/display-name */
/* eslin-disable */
import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { adopt } from 'react-adopt'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Button,
  Table,
  Form,
  FormGroup,
  CardFooter,
} from 'reactstrap'
import User from '../User'
import ModalBox from '../ModalBox'
import Layout from '../layout/Layout'
import SessionItem from '../SessionItem'
import PaginationComponent from '../Pagination'

import { START_SESSION_MUTATION } from '../../graphql'

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  startSession: ({ render }) => (
    <Mutation mutation={START_SESSION_MUTATION}>{render}</Mutation>
  ),
})

const Index = () => {
  const [isToggled, toggleModal] = useState(false)
  const [state, setState] = useState({ name: '', cardSet: '', polls: '' })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const createSession = () => {
    toggleModal(!isToggled)
    console.log('Starting Session!!')
    console.log({ ...state })
    console.log('Started!!')
  }

  return (
    <Composed>
      {({ user, startSession }) => {
        const me = user.data ? user.data.me : null
        const { sessions } = me

        console.log(me, sessions)
        return (
          <Layout title="Dashboard">
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
              <Container className="d-flex align-items-center" fluid>
                <Row>
                  <Col lg="12" md="10">
                    <h1 className="display-2 text-white mb-3">
                      Hello, {me.name}
                    </h1>
                    <Button
                      type="button"
                      color="primary"
                      onClick={() => toggleModal(!isToggled)}
                    >
                      Create new project
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* Page content */}
            <Container className="mt--7" fluid>
              <Row className="mt-3">
                <div className="col">
                  <Card className="shadow">
                    <CardHeader className="border-0">
                      <h3 className="mb-0">Sessions</h3>
                    </CardHeader>
                    <Table
                      className="align-items-center table-flush"
                      responsive
                    >
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Session Name</th>
                          <th scope="col">Created By</th>
                          <th scope="col">Users</th>
                          <th scope="col">Status</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        {me.sessions.map(session => (
                          <SessionItem session={session} key={session.id} />
                        ))}
                        <tr>
                          {!me.sessions.length === 0 && <td>No sessions</td>}
                        </tr>
                      </tbody>
                    </Table>
                    <CardFooter className="py-4">
                      <PaginationComponent />
                    </CardFooter>
                  </Card>
                </div>
              </Row>
              <Row>
                <Col md="6">
                  <ModalBox
                    isToggled={isToggled}
                    modalTitle="Create Session"
                    onCreate={() => createSession()}
                    onClose={() => toggleModal(!isToggled)}
                  >
                    <Form
                      method="post"
                      onSubmit={async e => {
                        e.preventDefault()
                        e.stopPropagation()
                        const res = await startSession({
                          variables: { ...state },
                        })
                          .then(() => console.log(res))
                          .catch(err => console.log(err))
                        setState({ name: '', cardSet: '', polls: '' })

                        console.log(res)
                      }}
                    >
                      <Row>
                        <Col md="7" className="pr-0">
                          <FormGroup>
                            <input
                              type="text"
                              name="name"
                              value={state.name}
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Enter session name"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="5">
                          <FormGroup>
                            <select
                              name="cardSet"
                              className="form-control"
                              onChange={handleChange}
                            >
                              <option value="1,2,3,4,5,6">Fibonacci</option>
                              <option>Modified Fibonacci</option>
                              <option>Powers of 2</option>
                              <option>T-Shirt</option>
                            </select>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <input
                          row="4"
                          type="textarea"
                          name="polls"
                          value={state.polls}
                          className="form-control"
                          onChange={handleChange}
                          placeholder="Enter stories, put each story on new line."
                        />
                      </FormGroup>
                    </Form>
                  </ModalBox>
                </Col>
              </Row>
            </Container>
          </Layout>
        )
      }}
    </Composed>
  )
}
export default Index
