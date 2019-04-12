import React from 'react'

import { Container } from 'reactstrap'
import { Sidebar, Footer, Navigation } from '..'
import Meta from '../Meta'

const Layout = ({ children, title }) => (
  <>
    <Meta title={title} />
    <Sidebar
      logo={{
        innerLink: '',
        imgSrc: '/',
        imgAlt: '...',
      }}
    />
    <div className="main-content">
      <Navigation />
      {children}
      <Container fluid>
        <Footer />
      </Container>
    </div>
  </>
)

export default Layout
