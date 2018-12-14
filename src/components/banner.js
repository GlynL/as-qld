import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Title from './h1'
import Navbar from './navbar'
import Membership from './membership'

const StyledSection = styled.section`
  background: #dddac5;
  min-height: 100vh;
  padding: 1rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Banner = ({ data }) => (
  <StyledSection>
    <Navbar />
    <Container>
      <header>
        <Img fluid={data.image.childImageSharp.fluid} />
        <Title>AS Group of QLD</Title>
      </header>
      <Membership />
    </Container>
  </StyledSection>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "as-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 175) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Banner data={data} {...props} />}
  />
)
