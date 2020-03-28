import React from 'react'
import '../config.css'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Title from './h1'
import Navbar from './navbar'
import Membership from './membership'
import ThreeHighlights from './three-highlights'

import { stateHighlights } from '../data'

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

const StyledHeader = styled.header``

const StyledImg = styled(Img)`
  max-width: 500px;
  margin: 0 auto;
`

const StyledP = styled.p`
  padding: 50px 150px;
`

const Banner = ({ data, content, states }) => (
  <StyledSection style={{ background: 'var(--banner-bg-color)' }}>
    <div>
      <Navbar />
      <Container>
        <StyledHeader>
          <StyledImg fluid={data.logo.childImageSharp.fluid} />
          <Title>{content.heading}</Title>
          <p>{content.subheading}</p>
        </StyledHeader>
      </Container>
    </div>
    <ThreeHighlights highlights={states} />
    <StyledP>{content.blurb.blurb}</StyledP>
  </StyledSection>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "as-logo.png" }) {
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
