/* eslint-disable react/display-name */
import React from 'react'
import { Query } from 'react-apollo'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Spinner,
} from 'reactstrap'
import Error from '../ErrorMessage'
import CardDeck from '../CardDeck'
import Layout from '../layout/Layout'

import { GET_SESSION } from '../../graphql'

const Session = ({ id }) => (
  <Query query={GET_SESSION} variables={{ id }}>
    {({ data, error, loading }) => {
      console.log(data)
      const currentSession = data ? data.getSession : null

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
                    {error && <Error error={error} />}
                    {loading && <Spinner grow="true" />}
                    <div className="d-flex align-items-center justify-content-around flex-wrap">
                      <CardDeck cardSet={currentSession.cardSet} />
                    </div>
                  </CardBody>
                  <CardFooter className="py-4">
                    <p>Statistics</p>
                  </CardFooter>
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
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Layout>
      )
    }}
  </Query>
)

export default Session
