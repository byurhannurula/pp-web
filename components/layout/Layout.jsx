import React from 'react'

import { Container } from 'reactstrap'
import { Sidebar, Footer, Navigation } from '../common'

const Layout = ({ children }) => (
  <>
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
