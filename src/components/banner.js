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

const Banner = ({ data }) =>
  console.log(data) || (
    <StyledSection style={{ background: 'var(--banner-bg-color)' }}>
      <div>
        <Navbar />
        <Container>
          <StyledHeader>
            <StyledImg fluid={data.logo.childImageSharp.fluid} />
            <Title>Ankylosing Spondylitis Australia</Title>
            <p>
              This website provides a place for the state AS support groups to
              present current information and details of activities.
            </p>
          </StyledHeader>
        </Container>
      </div>
      <ThreeHighlights
        one={{
          ...stateHighlights.qld,
          image: data.qld.childImageSharp.fixed,
        }}
        two={{
          ...stateHighlights.vic,
          image: data.vic.childImageSharp.fixed,
        }}
        three={{
          ...stateHighlights.wa,
          image: data.sa.childImageSharp.fixed,
        }}
      />
      <StyledP>
        People in other states are encouraged and invited to join the QLD or Vic
        group. This will enable you to receive the AS Australia newsletter –
        four times per year – which includes current Australian and
        international news, advances in management, details of educational and
        social events, and a regular exercise segment.
      </StyledP>
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
        qld: file(name: { in: "map-qld" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        vic: file(name: { in: "map-vic" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        sa: file(name: { in: "map-sa" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Banner data={data} {...props} />}
  />
)
