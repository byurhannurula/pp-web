import React from 'react'

import { Container } from 'reactstrap'
import { Sidebar, Footer, Navigation } from '..'
import Meta from '../Meta'

const Layout = ({ children, title }) => (
  <>
    <Meta title={title} />
    <Sidebar
      logo={{
        imgSrc: require('../../img/brand/logo.png'),
        imgAlt: 'PP',
      }}
    />
    <div className="main-content">
      <Navigation
        user={{
          name: 'Jessica Jones',
          avatar:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
        }}
      />
      {children}
      <Container fluid>
        <Footer />
      </Container>
    </div>
  </>
)

export default Layout
