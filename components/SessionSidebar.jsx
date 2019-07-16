import React, { useState } from 'react'
import { Mutation, Query } from 'react-apollo'
import { adopt } from 'react-adopt'
import { Form, Button } from 'reactstrap'

import {
  GET_SESSION,
  INVITE_MEMBER_MUTATION,
  DELETE_MEMBER_MUTATION,
} from '../graphql'
import User from './User'

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  getSession: ({ id, render }) => (
    <Query query={GET_SESSION} variables={{ id }}>
      {render}
    </Query>
  ),
  inviteMember: ({ id, render }) => (
    <Mutation
      mutation={INVITE_MEMBER_MUTATION}
      refetchQueries={[{ query: GET_SESSION, variables: { id } }]}
    >
      {render}
    </Mutation>
  ),
  deleteMember: ({ id, render }) => (
    <Mutation
      mutation={DELETE_MEMBER_MUTATION}
      refetchQueries={[{ query: GET_SESSION, variables: { id } }]}
    >
      {render}
    </Mutation>
  ),
})

const SessionSidebar = ({ id, members, pollData }) => {
  const [email, setEmail] = useState('')

  return (
    <Composed id={id}>
      {({
        user: { data: user },
        getSession: { data: session },
        inviteMember,
        deleteMember,
      }) => {
        const me = user ? user.me : ''
        const currentSession = session ? session.getSession : ''

        return (
          <>
            <ul className="list my--4 list-group list-group-flush">
              {members.map(member => (
                <li
                  className="px-0 py-3 list-group-item"
                  key={`member-${member.id.toString()}`}
                >
                  <div className="align-items-center row">
                    <div className="col-auto col">
                      <img
                        alt={member.name}
                        src={member.avatar}
                        className="avatar avatar-sm rounded-circle"
                      />
                    </div>

                    <div className="col-6 ml--3">
                      <h4 className="mb-0">{member.name}</h4>
                    </div>

                    {currentSession.createdBy.id === me.id &&
                      currentSession.createdBy.id !== member.id && (
                        <div className="col ml-5">
                          <div
                            style={{ cursor: 'pointer' }}
                            onClick={async e => {
                              e.preventDefault()
                              await deleteMember({
                                variables: {
                                  sessionId: id,
                                  userId: member.id,
                                },
                              })
                              setEmail('')
                            }}
                          >
                            x
                          </div>
                        </div>
                      )}
                  </div>
                </li>
              ))}
            </ul>

            {members.length < 8 && (
              <div className="mt-5">
                <h3>Invite a teammate</h3>
                <Form method="post">
                  <input
                    type="email"
                    className="form-control"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter email to invite member"
                  />
                  <Button
                    type="submit"
                    color="primary"
                    className="mt-4"
                    onClick={async e => {
                      e.preventDefault()
                      await inviteMember({
                        variables: { sessionId: id, email },
                      })
                      setEmail('')
                    }}
                  >
                    Send invitation
                  </Button>
                </Form>
              </div>
            )}
          </>
        )
      }}
    </Composed>
  )
}

export default SessionSidebar
