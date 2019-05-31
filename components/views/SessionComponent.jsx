/* eslint-disable react/display-name */
import React, { useState } from 'react'
import { Query } from 'react-apollo'

import {
  Row,
  Col,
  Card,
  Form,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Spinner,
  Button,
  Table,
} from 'reactstrap'
import keys from '../../config'
import CardDeck from '../CardDeck'
import Error from '../ErrorMessage'
import Layout from '../layout/Layout'
import AddPollModal from '../AddPollModal'

import { GET_SESSION } from '../../graphql'

const Session = ({ id }) => {
  const [isToggled, toggleModal] = useState(false)

  return (
    <Query query={GET_SESSION} variables={{ id }}>
      {({ data, error, loading }) => {
        const currentSession = data ? data.getSession : ''

        if (loading) return <Spinner grow="true" />
        if (error) return <Error error={error} />

        return (
          <Layout title="Session">
            <div className="header bg-gradient-info pb-7 pt-3 pt-md-7">
              <Container className="d-flex align-items-center" fluid>
                <Row>
                  <Col lg="12" md="12">
                    <h1 className="display-4 text-white my-3">
                      {currentSession.name}
                    </h1>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* Page content */}
            <Container className="mt--7" fluid>
              <Row className="mt-5">
                <Col className="order-xl-1 mb-5 mb-xl-0" xl="8">
                  <Card className="shadow">
                    <CardHeader className="border-0">
                      <Row className="">
                        <Col md="12">
                          <h4 className="m-0">User stories here!</h4>
                        </Col>
                      </Row>
                    </CardHeader>
                    <hr className="m-0 mb-1" />

                    <CardBody>
                      {currentSession && currentSession.cardSet && (
                        <div className="d-flex align-items-center justify-content-around flex-wrap">
                          <CardDeck cardSet={currentSession.cardSet} />
                        </div>
                      )}
                    </CardBody>
                    <CardFooter className="py-4" />
                  </Card>

                  <Card className="shadow mt-5">
                    <CardHeader className="border-0">
                      <Row className="align-items-center">
                        <Col md="8" xs="8">
                          <h4 className="m-0">Completed User Stories</h4>
                        </Col>
                        <Col md="4" xs="4" className="text-right">
                          <Button
                            size="sm"
                            type="button"
                            color="primary"
                            onClick={() => toggleModal(!isToggled)}
                          >
                            Add new story
                          </Button>
                        </Col>
                      </Row>
                    </CardHeader>

                    <Table
                      className="align-items-center table-flush"
                      responsive
                    >
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Story Name</th>
                          <th scope="col">Value</th>
                          <th scope="col">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentSession.polls &&
                          currentSession.polls.map(({ topic, result }) => (
                            <tr key={`key-${topic}`}>
                              <td>{topic}</td>
                              <td>{result}</td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </Card>
                </Col>

                {/* Member Column */}
                <Col className="order-xl-2" xl="4">
                  <Card className="border-0 shadow">
                    <CardHeader>
                      <h5 className="h3 mb-0 text-center">
                        {currentSession.name}
                      </h5>
                    </CardHeader>

                    <CardBody className="mt-1 pt-md-4">
                      <ul className="list my--3 list-group list-group-flush">
                        {currentSession.members.map(member => (
                          <li
                            className="px-0 list-group-item"
                            key={`member-${member.id}`}
                          >
                            <div className="align-items-center row">
                              <div className="col-auto col">
                                <img
                                  alt={member.name}
                                  src={member.avatar}
                                  className="avatar rounded-circle"
                                />
                              </div>

                              <div className="col ml--2">
                                <h4 className="mb-0">{member.name}</h4>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                      {/* {currentSession.isOwner === true && ( */}
                      {currentSession.members.length <= 8 && (
                        <div className="mt-5">
                          <h3>Invite a teammate</h3>
                          <input
                            type="text"
                            readOnly
                            className="form-control mb-2"
                            value={`${
                              process.env.NODE_ENV === 'development'
                                ? `${keys.dev.SESSION_URL}?id=${
                                    currentSession.id
                                  }`
                                : `${keys.prod.SESSION_URL}?id=${
                                    currentSession.id
                                  }`
                            }`}
                          />
                          <p className="text-center mb-1">
                            Or enter emails to send invitatins
                          </p>
                          <Form method="post">
                            <textarea
                              row="5"
                              className="form-control"
                              placeholder="Enter each email on a new line"
                            />
                            <Button
                              type="button"
                              color="primary"
                              className="mt-4"
                            >
                              Send invitation
                            </Button>
                          </Form>
                        </div>
                      )}
                      {/* )} */}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <AddPollModal
                    data={id}
                    isToggled={isToggled}
                    onClose={() => toggleModal(!isToggled)}
                  />
                </Col>
              </Row>
            </Container>
          </Layout>
        )
      }}
    </Query>
  )
}

export default Session
