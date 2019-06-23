/* eslint-disable react/display-name */
import React from 'react'
import { Mutation } from 'react-apollo'
import { adopt } from 'react-adopt'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown,
} from 'reactstrap'

import {
  GET_USER,
  UPDATE_SESSION_MUTATION,
  DELETE_SESSION_MUTATION,
} from '../graphql'

const Composed = adopt({
  updateSession: ({ render }) => (
    <Mutation
      mutation={UPDATE_SESSION_MUTATION}
      refetchQueries={[{ query: GET_USER }]}
    >
      {render}
    </Mutation>
  ),
  deleteSession: ({ render }) => (
    <Mutation
      mutation={DELETE_SESSION_MUTATION}
      refetchQueries={[{ query: GET_USER }]}
    >
      {render}
    </Mutation>
  ),
})

const SessionItem = ({ session }) => {
  return (
    <Composed>
      {({ updateSession, deleteSession }) => {
        return (
          <tr>
            <th scope="row">
              <Link
                href={`/session/?session=${session.id}`}
                as={`/session/${session.id}`}
              >
                <a className="mb-0 text-sm">{session.name}</a>
              </Link>
            </th>

            <td>
              {session.createdBy && (
                <div className="avatar-group">
                  <img
                    id="topic1"
                    alt={session.createdBy.name}
                    className="avatar avatar-sm rounded-circle"
                    src={session.createdBy.avatar}
                  />

                  <UncontrolledTooltip delay={0} target="topic1">
                    {session.createdBy.name}
                  </UncontrolledTooltip>
                </div>
              )}
            </td>

            {session.members && (
              <td>
                <div className="avatar-group">
                  {session.members.map(member => (
                    <>
                      <img
                        key={member.id}
                        id={`user-${member.id}`}
                        alt={member.name}
                        className="avatar avatar-sm rounded-circle"
                        src={member.avatar}
                      />

                      <UncontrolledTooltip
                        delay={0}
                        target={`user-${member.id}`}
                      >
                        {member.name}
                      </UncontrolledTooltip>
                    </>
                  ))}
                </div>
              </td>
            )}

            <td className="text-right">
              <UncontrolledDropdown>
                <DropdownToggle
                  className="btn-icon-only text-light"
                  role="button"
                  size="sm"
                >
                  <i className="fas fa-ellipsis-v" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem
                    onClick={async e => {
                      e.preventDefault()
                      await updateSession({
                        variables: {
                          id: session.id,
                          name: session.name,
                          cardSet: session.cardSet,
                        },
                      })
                    }}
                  >
                    Edit Session
                  </DropdownItem>
                  <DropdownItem
                    onClick={async e => {
                      e.preventDefault()
                      await deleteSession({
                        variables: { sessionId: session.id },
                      })
                    }}
                  >
                    Delete Session
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </td>
          </tr>
        )
      }}
    </Composed>
  )
}
export default SessionItem
