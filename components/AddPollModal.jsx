/* eslint-disable react/display-name */
import React, { useState } from 'react'
import { Mutation } from 'react-apollo'

import { Row, Col, Button, Modal, Form, FormGroup, CardBody } from 'reactstrap'

import { ADD_POLL_MUTATION, GET_USER } from '../graphql'

const AddPollModal = ({ data, isToggled, onClose }) => {
  const [state, setState] = useState({ topic: '', description: '' })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <Mutation
      mutation={ADD_POLL_MUTATION}
      refetchQueries={[{ query: GET_USER }]}
    >
      {addPoll => {
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
                  await addPoll({ variables: { sessionId: data.id, ...state } })
                  setState({ name: '', description: '' })
                }}
              >
                <Row>
                  <Col>
                    <FormGroup>
                      <input
                        type="text"
                        name="topic"
                        value={state.topic}
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Enter story"
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FormGroup>
                      <input
                        type="text"
                        name="description"
                        value={state.description}
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Enter story"
                        required
                      />
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
    </Mutation>
  )
}

export default AddPollModal
