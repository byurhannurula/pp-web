/*eslint-disable*/
import React, { useState } from 'react'
import Link from 'next/link'

// reactstrap components
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

export const Sidebar = () => {
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
            src={require('../../img/brand/argon-react.png')}
            alt="PokerPlanning"
            className="navbar-brand-img"
          />
        </NavbarBrand>
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt="sidebar profile"
                  />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <DropdownItem href="/profile">
                <>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#" onClick={e => e.preventDefault()}>
                <>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={isCollapsed}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link href="/">
                  <img
                    src={require('../../img/brand/argon-react.png')}
                    alt="PokerPlanning"
                  />
                </Link>
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
