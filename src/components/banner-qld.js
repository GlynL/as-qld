import React from 'react'
import '../config.css'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Title from './h1'
import Navbar from './navbar'
import Membership from './membership'

const StyledSection = styled.section`
  background: var(--main-bg-color);

  min-height: 100vh;
  padding-top: 0;
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
      <div>
        <p>
          Providing information and support to people living with AS, their
          partners, families and friends and the wider community.
        </p>
        <p>
          Supporting people living with AS by: Encouraging each person to take
          responsibility for their health. Facilitating the provision of
          exercise programs, classes and educational workshops Providing
          opportunities to meet socially. Encouraging research into the cause,
          management and prevention of AS.
        </p>
      </div>
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
