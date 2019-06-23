/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/display-name */
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

const SessionSidebar = ({ id, members, memberCard }) => {
  const [email, setEmail] = useState('')

  return (
    <Composed id={id}>
      {({
        user: {
          data: { me },
        },
        getSession: {
          data: { getSession: session },
        },
        inviteMember,
        deleteMember,
      }) => {
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

                    <div className="col ml-2">
                      <div
                        className="border d-flex align-items-center justify-content-center"
                        style={{ width: '32px', height: '42px' }}
                      >
                        {memberCard}
                      </div>
                    </div>

                    {session.createdBy.id === me.id &&
                      session.createdBy.id !== member.id && (
                        <div className="col">
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
