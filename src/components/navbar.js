import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0 1rem;
`

const Nav = styled.nav`
  display: flex;
  padding-left: 1rem;
  margin: 1rem;
  margin-top: 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #333;
`

export default () => (
  <Nav>
    <NavLink>Home</NavLink>
    <NavLink>About</NavLink>
    <NavLink>Contact</NavLink>
    <NavLink>Events</NavLink>
    <NavLink>Membership</NavLink>
  </Nav>
)
