import React from 'react'

import { Row, Col, Container } from 'reactstrap'
import { Sidebar, Navigation } from '../common'
import User from '../User'
import Meta from '../Meta'
import LogoImg from '../../img/brand/logo.png'

const Layout = ({ children, title }) => (
  <User>
    {({ data }) => {
      const me = data ? data.me : null
      return (
        <>
          <Meta title={title} />
          <Sidebar
            data={me}
            logo={{
              imgSrc: LogoImg,
              imgAlt: 'PokerPlanning',
            }}
          />
          <div className="main-content">
            <Navigation data={me} />
            {children}
            <Container fluid>
              <footer className="footer">
                <Row className="align-items-center justify-content-xl-between justify-content-xl-end">
                  <Col xl="6">
                    <div className="copyright text-center text-xl-left text-muted">
                      &copy; {new Date().getFullYear()}
                      <a className="font-weight-bold ml-1" href="/">
                        PokerPlanning
                      </a>
                    </div>
                  </Col>
                </Row>
              </footer>
            </Container>
          </div>
        </>
      )
    }}
  </User>
)

export default Layout
