import React from 'react'
import { Row, Col } from 'reactstrap'

export const Footer = () => (
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
)
