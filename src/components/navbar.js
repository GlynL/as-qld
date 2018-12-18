import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0.5rem 1rem;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  margin: 1rem;
  margin-top: 0;
  padding-top: 0.5rem;
  dpadding-bottom: 0.5rem;
  border-bottom: 1px solid #333;
`

const Navbar = ({ data }) => (
  <Nav>
    {
      //  <Img fixed={data.logo.childImageSharp.fixed} />
    }
    <NavLink to="/">Home</NavLink>
    <NavLink to="about">About</NavLink>
    <NavLink to="contact">Contact</NavLink>
    <NavLink to="events">Events</NavLink>
    <NavLink to="membership">Membership</NavLink>
  </Nav>
)

export default Navbar

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         logo: file(relativePath: { eq: "as-logo.png" }) {
//           childImageSharp {
//             fixed(width: 115, height: 50) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Navbar data={data} />}
//   />
// )
