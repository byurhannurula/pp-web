import React, { useState } from 'react'
import { Query, withApollo, Mutation } from 'react-apollo'
import { adopt } from 'react-adopt'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Spinner,
  Button,
  Table,
  Input,
} from 'reactstrap'

import CardDeck from '../CardDeck'
import Error from '../ErrorMessage'
import Layout from '../layout/Layout'
import AddPollModal from '../modals/AddPollModal'
import SessionSidebar from '../SessionSidebar'
import User from '../User'

import { GET_SESSION, GET_POLL, ADD_VOTE_MUTATION } from '../../graphql'

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  getSession: ({ sessionId, render }) => (
    <Query query={GET_SESSION} variables={{ id: sessionId }}>
      {render}
    </Query>
  ),
  // addVote: ({ render }) => (
  //   <Mutation mutation={ADD_VOTE_MUTATION} variables={{pollIduserId: }}>{render}</Mutation>
  // ),
})

const Session = ({ client, id }) => {
  const [isToggled, toggleModal] = useState(false)
  const [cardValue, setCardValue] = useState()
  const [optionValue, setOptionValue] = useState('')
  const [currentPoll, setCurrentPoll] = useState(null)

  const priorityOptions = [
    {
      label: 'Select',
      value: '',
    },
    {
      label: 'Must',
      value: 'M',
    },
    {
      label: 'Should',
      value: 'S',
    },
    {
      label: 'Could',
      value: 'C',
    },
    {
      label: "Won't",
      value: 'W',
    },
  ]

  const handleChange = e => {
    e.preventDefault()
    setOptionValue(e.target.value)
  }

  const handleClick = value => {
    setCardValue(value)
  }

  const runPollQuery = async value => {
    const { data } = await client.query({
      query: GET_POLL,
      variables: { id: value },
    })
    setCurrentPoll(data.getPoll)
  }

  return (
    <Composed sessionId={id}>
      {({
        user: { data: user, error, loading },
        getSession: { data: session },
      }) => {
        const currentSession = session ? session.getSession : ''
        const me = user ? user.me : ''

        if (loading) return <Spinner type="grow" color="primary" />
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
                        {currentPoll ? (
                          <>
                            <Col md="8">
                              <h4 className="m-0">{currentPoll.topic}</h4>
                            </Col>
                            <Col md="4">
                              <p>{currentPoll.result}</p>
                            </Col>
                          </>
                        ) : (
                          <Col md="12">
                            <h4 className="m-0">User stories here!</h4>
                          </Col>
                        )}
                      </Row>
                    </CardHeader>
                    <hr className="m-0 mb-1" />

                    <CardBody>
                      {currentSession && currentSession.cardSet && (
                        <div className="d-flex align-items-center justify-content-around flex-wrap">
                          <CardDeck
                            cardSet={currentSession.cardSet}
                            onClick={e => handleClick(e)}
                          />
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
                          <th scope="col">
                            Value
                            <svg
                              width="12"
                              height="12"
                              fill="#545454"
                              viewBox="0 0 24 24"
                              style={{ marginLeft: '6px' }}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 21L0 3h24z" />
                              {/* <path d="M12 3l12 18h-24z" /> */}
                            </svg>
                          </th>

                          <th scope="col">Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentSession.polls &&
                          currentSession.polls.map(pl => (
                            <tr key={pl.id}>
                              <td>
                                <a
                                  onClick={() => runPollQuery(pl.id)}
                                  style={{ cursor: 'pointer' }}
                                >
                                  {pl.topic}
                                </a>
                              </td>
                              <td>{pl.result}</td>
                              <td>
                                <Input
                                  type="select"
                                  name="priority"
                                  value={optionValue}
                                  onChange={handleChange}
                                  style={{ height: 'calc(1.5rem + 2px)' }}
                                >
                                  {priorityOptions.map(el => (
                                    <option value={el.value} key={el.value}>
                                      {el.label}
                                    </option>
                                  ))}
                                </Input>
                              </td>
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
                      <SessionSidebar
                        id={id}
                        memberCard={cardValue}
                        pollData={currentPoll}
                        members={currentSession.members}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <AddPollModal
                    id={id}
                    isToggled={isToggled}
                    onClose={() => toggleModal(!isToggled)}
                  />
                </Col>
              </Row>
            </Container>
          </Layout>
        )
      }}
    </Composed>
  )
}

export default withApollo(Session)
