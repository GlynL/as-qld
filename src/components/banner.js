import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Title from './h1'
import Navbar from './navbar'
import Membership from './membership'

const StyledSection = styled.section`
  background: #dddac5;
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

const Banner = ({ data }) => (
  <StyledSection>
    <Navbar />
    <Container>
      <StyledHeader>
        <StyledImg fluid={data.image.childImageSharp.fluid} />
        <Title>Ankylosing Spondylitis Australia</Title>
        <p>
          This website provides a place for the state AS support groups to
          present current information and details of activities.
        </p>
      </StyledHeader>
      <section>
        <div>
          <Link to="qld">QLD</Link>
          <p>
            An active support group with social events. The QLD group supports a
            weekly hydrotherapy exercise class in Brisbane for people with AS.
          </p>
        </div>
        <div>
          <Link to="vic">VIC</Link>
          <p>
            Active support groups with regular events and an annual seminar.
          </p>
        </div>
        <div>
          <Link to="wa">WA</Link>
          <p>Some weekly exercise classes.</p>
        </div>
        <p>
          People in other states are encouraged and invited to join the QLD or
          Vic group. This will enable you to receive the AS Australia newsletter
          – four times per year – which includes current Australian and
          international news, advances in management, details of educational and
          social events, and a regular exercise segment.
        </p>
      </section>
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
