import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

import Navbar from './navbar'

const StyledImage = styled(Img)`
  margin: 0 auto;
  max-width: 345px;
  max-height: 150px;
`
const Container = styled.div`
  padding: 1rem;
  margin: 0 auto;
`

const Header = ({ data }) => (
  <div>
    <Container>
      <StyledImage fluid={data.logo.childImageSharp.fluid} />
    </Container>
    <Navbar />
  </div>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "as-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 345, maxHeight: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
)
