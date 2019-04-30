/* eslint-disable react/display-name */
import React from 'react'
import { Mutation } from 'react-apollo'
import { adopt } from 'react-adopt'
import Link from 'next/link'
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown,
} from 'reactstrap'

import { UPDATE_SESSION_MUTATION, DELETE_SESSION_MUTATION } from '../graphql'

const Composed = adopt({
  updateSession: ({ render }) => (
    <Mutation mutation={UPDATE_SESSION_MUTATION}>{render}</Mutation>
  ),
  deleteSession: ({ render }) => (
    <Mutation mutation={DELETE_SESSION_MUTATION}>{render}</Mutation>
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
                href={{
                  pathname: '/session',
                  query: { id: session.id },
                }}
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

            <td>
              {session.members.id && (
                <div className="avatar-group">
                  <img
                    id="topic2"
                    alt={session.members.name}
                    className="avatar avatar-sm rounded-circle"
                    src={session.members.avatar}
                  />

                  <UncontrolledTooltip delay={0} target="topic2">
                    {session.members.name}
                  </UncontrolledTooltip>
                </div>
              )}
              {!session.members.id && `No users`}
            </td>

            <td>
              {session.members && (
                <Badge color="" className="badge-dot mr-4">
                  <i className="bg-success" />
                  active
                </Badge>
              )}
            </td>

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
                      const res = await updateSession({
                        id: session.id,
                        name: session.name,
                        cardSet: session.cardSet,
                      })
                        .then(() => console.log(res))
                        .catch(err => console.log(err))
                      console.log(res)
                    }}
                  >
                    Edit Session
                  </DropdownItem>
                  <DropdownItem
                    onClick={async e => {
                      e.preventDefault()
                      await deleteSession({ id: session.id })
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
