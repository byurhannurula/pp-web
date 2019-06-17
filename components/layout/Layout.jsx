import React from 'react'
import Link from 'next/link'
import { Row, Col, Container } from 'reactstrap'
import { Sidebar, Navigation } from '../common'
import User from '../User'
import Meta from '../Meta'
import LogoImg from '../../img/brand/logo.svg'

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
                      <Link href="/">
                        <a className="font-weight-bold ml-1">PokerPlanning</a>
                      </Link>
                    </div>
                  </Col>
                  <Col xl="6">
                    <div className="copyright text-center text-xl-left text-muted">
                      Made by{` `}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://byurhanbeyzat.com"
                      >
                        Byurhan Beyzat
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
