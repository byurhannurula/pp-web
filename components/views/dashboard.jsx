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

import { START_SESSION_MUTATION, GET_USER } from '../../graphql'

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  startSessionMutation: ({ render }) => (
    <Mutation
      mutation={START_SESSION_MUTATION}
      refetchQueries={[{ query: GET_USER }]}
    >
      {render}
    </Mutation>
  ),
})

const Index = () => {
  const [isToggled, toggleModal] = useState(false)
  const [state, setState] = useState({ name: '', cardSet: '', polls: '' })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <Composed>
      {({ user, startSessionMutation }) => {
        const me = user.data ? user.data.me : null

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
                  <ModalBox isToggled={isToggled} modalTitle="Create Session">
                    <Form
                      method="post"
                      onSubmit={async e => {
                        e.preventDefault()
                        await startSessionMutation({ variables: { ...state } })
                        setState({ name: '', cardSet: '', polls: '' })
                        toggleModal(!isToggled)
                      }}
                    >
                      <Row>
                        <Col sm="7" md="7" className="pr-0">
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

                        <Col sm="5" md="5">
                          <FormGroup>
                            <select
                              name="cardSet"
                              value={state.cardSet}
                              className="form-control"
                              onChange={handleChange}
                            >
                              <option value="0" selected>
                                Card Set
                              </option>
                              <option>Fibonacci</option>
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
                          className="form-control mb-5"
                          onChange={handleChange}
                          placeholder="Enter stories, put each story on new line."
                        />
                      </FormGroup>

                      <Col className="d-flex justify-content-end">
                        <Button type="submit" color="primary">
                          Create
                        </Button>
                        <Button
                          type="button"
                          color="secondary"
                          data-dismiss="modal"
                          onClick={() => toggleModal(!isToggled)}
                        >
                          Cancel
                        </Button>
                      </Col>
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
