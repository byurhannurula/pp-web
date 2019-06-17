import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { Form, Button } from 'reactstrap'

import { GET_SESSION, INVITE_MEMBER_MUTATION } from '../graphql'

const SessionSidebar = ({ id, members }) => {
  const [email, setEmail] = useState('')

  return (
    <Mutation
      mutation={INVITE_MEMBER_MUTATION}
      refetchQueries={[{ query: GET_SESSION, variables: { id } }]}
    >
      {inviteMember => {
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

                    <div className="col ml-5">CV</div>
                  </div>
                </li>
              ))}
            </ul>

            {members.length < 8 && (
              <div className="mt-5">
                <h3>Invite a teammate</h3>
                <Form
                  method="post"
                  onSubmit={async e => {
                    e.preventDefault()
                    await inviteMember({
                      variables: { sessionId: id, email },
                    })
                    setEmail('')
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="form-control"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter email to invite member"
                  />
                  <Button type="submit" color="primary" className="mt-4">
                    Send invitation
                  </Button>
                </Form>
              </div>
            )}
          </>
        )
      }}
    </Mutation>
  )
}

export default SessionSidebar
