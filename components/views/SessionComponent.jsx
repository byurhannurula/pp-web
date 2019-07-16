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

import {
  GET_SESSION,
  GET_POLL,
  SAVE_POLL_MUTATION,
  UPDATE_POLL_PRIORITY_MUTATION,
  ADD_VOTE_MUTATION,
  GET_POLL_VOTES,
} from '../../graphql'

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  getSession: ({ sessionId, render }) => (
    <Query query={GET_SESSION} variables={{ id: sessionId }}>
      {render}
    </Query>
  ),
  addVote: ({ render }) => (
    <Mutation mutation={ADD_VOTE_MUTATION}>{render}</Mutation>
  ),
  updatePollPriority: ({ sessionId, render }) => (
    <Mutation
      mutation={UPDATE_POLL_PRIORITY_MUTATION}
      refetchQueries={[{ query: GET_SESSION, variables: { id: sessionId } }]}
    >
      {render}
    </Mutation>
  ),
  savePoll: ({ sessionId, render }) => (
    <Mutation
      mutation={SAVE_POLL_MUTATION}
      refetchQueries={[{ query: GET_SESSION, variables: { id: sessionId } }]}
    >
      {render}
    </Mutation>
  ),
})

const Session = ({ client, id }) => {
  const [isToggled, toggleModal] = useState(false)
  const [cardValue, setCardValue] = useState()
  const [optionValue, setOptionValue] = useState('')
  const [currentPoll, setCurrentPoll] = useState(null)
  let votesSum = 0

  const [disabled, setDisabled] = useState(false)

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

  const handleClick = value => {
    setDisabled(true)
    setCardValue(value)
  }

  const runPollQuery = async value => {
    const { data } = await client.query({
      query: GET_POLL,
      variables: { id: value },
    })
    setCurrentPoll(data.getPoll)
  }

  const calcVotes = async () => {
    const { data } = await client.query({
      query: GET_POLL_VOTES,
      variables: { pollId: currentPoll.id },
    })

    let totalOfVotes = 0

    data.getPollVotes.votes.map(({ value }) => {
      totalOfVotes += value
    })
    votesSum = totalOfVotes
    console.log(totalOfVotes, votesSum)
    return votesSum
  }

  return (
    <Composed sessionId={id}>
      {({
        user: { data: user, error, loading },
        getSession: { data: session },
        addVote,
        savePoll,
        updatePollPriority,
      }) => {
        const currentSession = session ? session.getSession : ''
        const me = user ? user.me : ''

        const poll = currentPoll || ''

        console.log(poll, session)

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
                        {poll ? (
                          <>
                            <Col md="8">
                              <h4 className="m-0">{poll.topic}</h4>
                            </Col>
                            <Col md="4">
                              <Button
                                type="button"
                                onClick={async e => {
                                  e.preventDefault()
                                  await calcVotes()
                                  console.log(poll.id)
                                  await savePoll({
                                    variables: {
                                      pollId: poll.id,
                                      result: votesSum,
                                    },
                                  })
                                }}
                              >
                                Save Poll
                              </Button>
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
                            isDisabled={disabled}
                            cardSet={currentSession.cardSet}
                            onClick={async e => {
                              await handleClick(e)
                              console.log(cardValue)
                              await addVote({
                                variables: {
                                  pollId: poll.id,
                                  userId: me.id,
                                  value: cardValue,
                                },
                              })
                            }}
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
                          {currentSession.createdBy.id === me.id && (
                            <th scope="col">Values</th>
                          )}
                          <th scope="col">Priority</th>
                          <th />
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
                              {currentSession.createdBy.id === me.id && (
                                <td>
                                  {pl.votes
                                    .map(({ value }) => value)
                                    .join(', ')}
                                </td>
                              )}

                              <td>
                                {pl.priority && pl.priority !== '' ? (
                                  <p className="my-0">{pl.priority}</p>
                                ) : (
                                  <Input
                                    type="select"
                                    name={`priority-${pl.id}`}
                                    value={optionValue[`priority-${pl.id}`]}
                                    onChange={e =>
                                      setOptionValue(e.target.value)
                                    }
                                    style={{ height: 'calc(1.5rem + 2px)' }}
                                  >
                                    {priorityOptions.map(el => (
                                      <option value={el.value} key={el.value}>
                                        {el.label}
                                      </option>
                                    ))}
                                  </Input>
                                )}
                              </td>
                              <td className="px-0">
                                <button
                                  type="button"
                                  size="sm"
                                  className="btn btn-primary btn-sm"
                                  onClick={async e => {
                                    e.preventDefault()
                                    await updatePollPriority({
                                      variables: {
                                        pollId: pl.id,
                                        priority: optionValue,
                                      },
                                    })
                                  }}
                                >
                                  Save
                                </button>
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
