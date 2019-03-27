import React from 'react'
import Link from 'next/link'

import { LogoutIcon } from '../SVG'
import { Container } from '../Container'
import { HeaderWrapper, Wrapper, Brand, Nav, NavList } from './styles'

const Header = () => (
  <HeaderWrapper>
    <Wrapper as={Container}>
      <Brand href="/">PokerPlanning</Brand>
      <Nav>
        <NavList>
          <li>
            <Link href="/">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Deck Builder</a>
            </Link>
          </li>
          <li className="seperator" />
          <li>
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
              alt="avatar"
            />
            <Link href="/">
              <a>Byurhan Beyzat</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <LogoutIcon />
              </a>
            </Link>
          </li>
        </NavList>
      </Nav>
    </Wrapper>
  </HeaderWrapper>
)

export { Header }
