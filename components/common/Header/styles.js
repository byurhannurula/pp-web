import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Brand = styled.a`
  font-size: 18px;
  font-weight: 600;
`

export const Nav = styled.nav`
  display: flex;
`

export const NavList = styled.ul`
  display: flex;

  li {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin-left: 22px;
    }

    &:last-child {
      margin-top: 3px;
      margin-left: 12px;
    }

    &.seperator {
      width: 1px;
      height: 28px;
      align-self: center;
      background-color: #444;
    }

    img {
      height: 32px;
      align-self: center;
      border-radius: 100%;
      margin-right: 12px;
    }

    svg {
      width: 18px;
      height: 18px;
      fill: #141414;
    }
  }
`

// export const NavItem = styled.li`
//   display: flex;
//   align-items: center;

//   &:not(:first-child) {
//     margin-left: 22px;
//   }

//   &:last-child {
//     margin-top: 3px;
//     margin-left: 12px;
//   }

//   ${({ seperator }) =>
//     seperator &&
//     `
//     width: 1px;
//     height: 28px;
//     align-self: center;
//     background-color: #444;
// 	`};

//   img {
//     height: 32px;
//     align-self: center;
//     border-radius: 100%;
//     margin-right: 12px;
//   }

//   svg {
//     width: 18px;
//     height: 18px;
//     fill: #141414;
//   }
// `
