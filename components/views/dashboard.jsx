/* eslin-disable */
import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  Button,
  Table,
  Spinner,
} from 'reactstrap'

import User from '../User'
import Error from '../ErrorMessage'
import Layout from '../layout/Layout'
import SessionItem from '../SessionItem'
import PaginationComponent from '../Pagination'
import StartSessionModal from '../modals/StartSessionModal'

const Index = () => {
  const [isToggled, toggleModal] = useState(false)

  return (
    <User>
      {({ data, loading, error }) => {
        const me = data ? data.me : null

        if (loading) return <Spinner type="grow" color="primary" />
        if (error) return <Error error={error} />

        return (
          <Layout title="Dashboard">
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
              <Container className="d-flex align-items-center" fluid>
                <Row>
                  <Col lg="12" md="10">
                    <h1 className="display-2 text-white mb-3">
                      Hello, {me.name}
                    </h1>
                    <Button
                      type="button"
                      color="primary"
                      onClick={() => toggleModal(!isToggled)}
                    >
                      Create new project
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* Page content */}
            <Container className="mt--7" fluid>
              <Row className="mt-3">
                <div className="col">
                  <Card className="shadow">
                    <CardHeader className="border-0">
                      <h3 className="mb-0">Sessions</h3>
                    </CardHeader>
                    <Table
                      className="align-items-center table-flush"
                      responsive
                    >
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Session Name</th>
                          <th scope="col">Created By</th>
                          <th scope="col">Users</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        {me.sessions.map(session => (
                          <SessionItem
                            session={session}
                            key={`session-${session.id}`}
                          />
                        ))}
                        <tr>
                          {!me.sessions.length === 0 && <td>No sessions</td>}
                        </tr>
                      </tbody>
                    </Table>
                    <CardFooter className="py-4">
                      <PaginationComponent />
                    </CardFooter>
                  </Card>
                </div>
              </Row>
              <Row>
                <Col md="6">
                  <StartSessionModal
                    isToggled={isToggled}
                    onClose={() => toggleModal(!isToggled)}
                  />
                </Col>
              </Row>
            </Container>
          </Layout>
        )
      }}
    </User>
  )
}
export default Index
