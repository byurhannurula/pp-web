/*eslint-disable*/
import React, { useState } from 'react'
import Link from 'next/link'
import Signout from '../Signout'

import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
} from 'reactstrap'

export const Sidebar = ({ logo, data }) => {
  const [isCollapsed, toggleCollapse] = useState(false)

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => toggleCollapse(!isCollapsed)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        <NavbarBrand className="pt-0">
          <img
            src={logo.imgSrc}
            alt={logo.imgAlt}
            className="navbar-brand-img"
          />
        </NavbarBrand>
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img src={data.avatar} alt={data.name} />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <Link href="/profile">
                <DropdownItem>
                  <i className="ni ni-single-02" />
                  <span>Profile</span>
                </DropdownItem>
              </Link>
              <DropdownItem divider />
              <Signout />
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={isCollapsed}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              <Col className="collapse-brand" xs="6">
                <img src={logo.imgSrc} alt={logo.imgAlt} />
              </Col>
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={() => toggleCollapse(!isCollapsed)}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Navigation */}
          <Nav navbar>
            <NavItem>
              <Link href="/">
                <NavLink>
                  <i className="ni ni-tv-2 text-primary" />
                  Dashboard
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/profile">
                <NavLink>
                  <i className="ni ni-single-02 text-yellow" />
                  Profile
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}
