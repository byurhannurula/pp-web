/* eslint-disable react/display-name */
import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { adopt } from 'react-adopt'
import { Row, Col, Button, Modal, Form, FormGroup, CardBody } from 'reactstrap'

import { START_SESSION_MUTATION, GET_USER } from '../graphql'

const Composed = adopt({
  startSession: ({ render }) => (
    <Mutation
      mutation={START_SESSION_MUTATION}
      refetchQueries={[{ query: GET_USER }]}
    >
      {render}
    </Mutation>
  ),
})

const ModalBox = ({ isToggled, onClose }) => {
  const [state, setState] = useState({ name: '', cardSet: '' })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <Composed>
      {({ startSession }) => {
        return (
          <Modal className="modal-dialog-centered" isOpen={isToggled}>
            <div className="modal-header">
              <h3 className="modal-title">Create Session</h3>
            </div>
            <CardBody>
              <Form
                method="post"
                onSubmit={async e => {
                  e.preventDefault()
                  await startSession({ variables: { ...state } })
                  setState({ name: '', cardSet: '' })
                }}
              >
                <Row>
                  <Col sm="7" md="7" className="pr-sm-0">
                    <FormGroup>
                      <input
                        type="text"
                        name="name"
                        value={state.name}
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Enter session name"
                        required
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
                        <option>Card Set</option>
                        <option>Fibonacci</option>
                        <option>Modified Fibonacci</option>
                        <option>Powers of 2</option>
                        <option>T-Shirt</option>
                      </select>
                    </FormGroup>
                  </Col>
                </Row>

                <Col className="d-flex justify-content-end">
                  <Button type="submit" color="primary" onClick={onClose}>
                    Create
                  </Button>
                  <Button
                    type="button"
                    color="secondary"
                    data-dismiss="modal"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                </Col>
              </Form>
            </CardBody>
          </Modal>
        )
      }}
    </Composed>
  )
}

export default ModalBox
