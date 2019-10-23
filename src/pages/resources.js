import React from 'react'
import { withPrefix, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/h1'
import styled from 'styled-components'

const StyledUl = styled.ul`
  list-style: none;
`

const StyledImg = styled(Img)`
  margin-left: 20px;
  border: 1px solid var(--banner-bg-color);
`

const Resources = ({ data }) => {
  return (
    <Layout>
      <SEO title="resources"></SEO>
      <Title>Resources</Title>
      <h2>Resources for AS</h2>
      <StyledUl>
        <li>
          <div>
            <a href={withPrefix('/AS-booklet.pdf')} target="_blank">
              Living with an inflammatory arthritis - Anylosing Spondylitis
              Handbook
            </a>
          </div>
          <div>
            <StyledImg fixed={data.guidebook.childImageSharp.fixed} />
          </div>
        </li>
        <li>
          <a
            href={withPrefix('/2019-Exercise-video-links.pdf')}
            target="_blank"
          >
            Exercise Video Links
          </a>
        </li>
        <li>
          The AS group of Queensland Land (free) & Pool ($15) Exercise DVD's -{' '}
          <Link to="/qld#contact">Contact if interested</Link>
          <Img fixed={data.dvds.childImageSharp.fixed} />
        </li>
        {/* same as guidebook */}
        {/* <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.wixstatic.com/ugd/1a10c2_720831473a0e43ef8561645c2ccecca0.pdf"
          >
            Living with an inflammatory arthritis - Anylosing Spondylitis
            Handbook
          </a>
        </li> */}
      </StyledUl>
      <h2>Links</h2>
      <StyledUl>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://asif.rheumanet.org/"
          >
            Axial Spondylitis IF (ASIF)
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nass.co.uk/"
          >
            National AS Society (UK)
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.spondylitis.org/"
          >
            Spondylitis Association of America
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.spondylitis.ca/"
          >
            Canadian Spondylitis Association
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://arthritisaustralia.com.au/"
          >
            Arthitis Australia
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://empowered.org/"
          >
            Empowered
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://rheumatology.org.au"
          >
            Australian Rheumatology Association
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.apsoc.org.au/"
          >
            The Australian Pain Society
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.australian.physio"
          >
            Australian Physio Association (APA)
          </a>
        </li>
      </StyledUl>
    </Layout>
  )
}

export const query = graphql`
  query ResourcesPageQuery {
    guidebook: file(name: { in: "guidebook-cover" }) {
      childImageSharp {
        fixed(width: 200, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dvds: file(name: { in: "dvds" }) {
      childImageSharp {
        fixed(width: 450, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Resources
