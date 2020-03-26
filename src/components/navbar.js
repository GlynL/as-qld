import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0.5rem 1rem;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  margin: 1rem;
  margin-top: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #333;
`

const StyledNavDiv = styled.div`
  display: flex;
  align-items: center;
`

const Navbar = ({ data }) => (
  <Nav>
    <StyledNavDiv>
      <Img fixed={data.logo.childImageSharp.fixed} />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-as">About AS</NavLink>
      <NavLink to="/resources">Resources</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </StyledNavDiv>
    <StyledNavDiv>
      <NavLink to="/">National</NavLink>
      <NavLink to="/qld">QLD</NavLink>
      <NavLink to="/vic">VIC</NavLink>
      <NavLink to="/wa">WA</NavLink>
    </StyledNavDiv>
  </Nav>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "as-logo.png" }) {
          childImageSharp {
            fixed(width: 115, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Navbar data={data} />}
  />
)
