import React, { useState } from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  Button,
  Table,
  Form,
  Input,
  FormGroup,
  CardFooter,
  Container,
  Spinner,
} from 'reactstrap'
import User from '../User'
import ModalBox from '../ModalBox'
import CardDeck from '../CardDeck'
import Layout from '../layout/Layout'

const Index = () => {
  const [isToggled, toggleModal] = useState(false)

  const addStory = () => {
    toggleModal(!isToggled)
    console.log('Creating Story!!')
    console.log('Created!!')
  }

  return (
    <User>
      {({ data }) => {
        const me = data ? data.me : null
        return (
          <Layout title="Session">
            <div className="header bg-gradient-info pb-7 pt-3 pt-md-7">
              <Container className="d-flex align-items-center" fluid>
                <Row>
                  <Col lg="12" md="12">
                    <h1 className="display-4 text-white mb-3">
                      Pokerplanning-app
                    </h1>
                    <Button
                      type="button"
                      color="primary"
                      onClick={() => toggleModal(!isToggled)}
                    >
                      Add Story
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
                      <h3 className="mb-3">Table</h3>
                      <Row className="">
                        <Col md="6">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </Col>
                      </Row>
                    </CardHeader>
                    <Table
                      className="align-items-center table-flush"
                      responsive
                    >
                      <tbody>
                        <tr>
                          <CardDeck />
                        </tr>
                      </tbody>
                    </Table>
                    <CardFooter className="py-4">
                      <p>Statistics</p>
                    </CardFooter>
                  </Card>
                </div>
              </Row>
              <Row>
                <Col md="6">
                  <ModalBox
                    isToggled={isToggled}
                    modalTitle="Add Story"
                    buttonTitle="Add"
                    onCreate={() => addStory()}
                    onClose={() => toggleModal(!isToggled)}
                  >
                    <Form>
                      <FormGroup>
                        <Input type="text" placeholder="Story" />
                      </FormGroup>
                      <FormGroup>
                        <Input type="text" placeholder="Description" />
                      </FormGroup>
                    </Form>
                  </ModalBox>
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
