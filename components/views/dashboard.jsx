import React from 'react'
import Link from 'next/link'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Button,
  Table,
  Badge,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  UncontrolledTooltip,
} from 'reactstrap'
import User from '../User'
import Layout from '../layout/Layout'

const Index = () => (
  <User>
    {({ data }) => {
      const me = data ? data.me : null
      return (
        <Layout title="Dashboard">
          <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
            <Container className="d-flex align-items-center" fluid>
              <Row>
                <Col lg="8" md="10">
                  <h1 className="display-2 text-white">Hello {me.name}</h1>
                  <p className="text-white mt-0 mb-5">
                    This is your profile page. You can see the progress. This is
                    your profile page. You can see the progress.
                  </p>
                  <Button type="button" color="primary">
                    Create new project
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          {/* Page content */}
          <Container className="mt--7" fluid>
            <Row className="mt-5">
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">Card tables</h3>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Project</th>
                        <th scope="col">Status</th>
                        <th scope="col">Users</th>
                        <th scope="col">Completion</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <Link href="#pablo">
                            <a className="mb-0 text-sm">Argon Design System</a>
                          </Link>
                        </th>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            <i className="bg-warning" />
                            pending
                          </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip123"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt={me.name}
                                className="rounded-circle"
                                src={me.avatar}
                              />
                            </a>
                            <UncontrolledTooltip delay={0} target="tooltip123">
                              {me.name}
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip123"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt={me.name}
                                className="rounded-circle"
                                src={me.avatar}
                              />
                            </a>
                            <UncontrolledTooltip delay={0} target="tooltip123">
                              {me.name}
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">60%</span>
                            <div>
                              <Progress
                                max="100"
                                value="60"
                                barClassName="bg-danger"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Edit Project
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Delete Project
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <Link href="#pablo">
                            <a className="mb-0 text-sm">Argon Design System</a>
                          </Link>
                        </th>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            <i className="bg-warning" />
                            pending
                          </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip123"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt={me.name}
                                className="rounded-circle"
                                src={me.avatar}
                              />
                            </a>
                            <UncontrolledTooltip delay={0} target="tooltip123">
                              {me.name}
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip123"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt={me.name}
                                className="rounded-circle"
                                src={me.avatar}
                              />
                            </a>
                            <UncontrolledTooltip delay={0} target="tooltip123">
                              {me.name}
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">60%</span>
                            <div>
                              <Progress
                                max="100"
                                value="60"
                                barClassName="bg-danger"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Edit Project
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Delete Project
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <CardFooter className="py-4">
                    <nav aria-label="...">
                      <Pagination
                        className="pagination justify-content-end mb-0"
                        listClassName="justify-content-end mb-0"
                      >
                        <PaginationItem className="disabled">
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            tabIndex="-1"
                          >
                            <i className="fas fa-angle-left" />
                            <span className="sr-only">Previous</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="active">
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            2 <span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-angle-right" />
                            <span className="sr-only">Next</span>
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                  </CardFooter>
                </Card>
              </div>
            </Row>
          </Container>
        </Layout>
      )
    }}
  </User>
)

export default Index
