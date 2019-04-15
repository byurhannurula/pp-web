import React from 'react'

import { Container } from 'reactstrap'
import { Sidebar, Footer, Navigation } from '..'
import User from '../User'
import Meta from '../Meta'

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
              imgSrc: require('../../img/brand/logo.png'),
              imgAlt: 'PokerPlanning',
            }}
          />
          <div className="main-content">
            <Navigation data={me} />
            {children}
            <Container fluid>
              <Footer />
            </Container>
          </div>
        </>
      )
    }}
  </User>
)

export default Layout
