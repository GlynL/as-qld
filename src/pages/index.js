import React from 'react'
import Banner from '../components/banner'
import SEO from '../components/seo'
import ThreeHighlights from '../components/three-highlights'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  if (!data) {
    return null
  }

  return (
    <div>
      <SEO
        title="Home"
        keywords={[
          'as',
          'ankylosing spondylitis',
          'australia',
          'queensland',
          'qld',
        ]}
      />
      <Banner content={data.content} states={data.states} />
      <ThreeHighlights highlights={data.highlights} />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query landingPageQuery {
    content: contentfulLandingPage {
      heading
      subheading
      blurb {
        blurb
      }
    }
    states: allContentfulState {
      edges {
        node {
          title
          text
          image {
            fixed(width: 140, height: 120) {
              ...GatsbyContentfulFixed
            }
          }
          websiteLink
        }
      }
    }
    highlights: allContentfulHighlight {
      edges {
        node {
          title
          text
          websiteLink
        }
      }
    }
  }
`
