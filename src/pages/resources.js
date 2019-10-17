import React from 'react'
import { withPrefix } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/h1'

const Resources = () => {
  return (
    <Layout>
      <SEO title="resources"></SEO>
      <Title>Resources</Title>
      <p>Resources for AS</p>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.wixstatic.com/ugd/1a10c2_720831473a0e43ef8561645c2ccecca0.pdf"
          >
            Living with an inflammatory arthritis - Anylosing Spondylitis
            Handbook
          </a>
        </li>
      </ul>
      <p>Exercises</p>
      <p>links</p>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://asif.rheumanet.org/"
          >
            Ankylosing Spondylitis International Federation (ASIF)
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
        <li>
          <a href={withPrefix('/AS-booklet.pdf')} target="_blank">
            Guidebook
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default Resources
