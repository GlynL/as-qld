import React from 'react'
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
            href="https://arthritisaustralia.com.au/"
          >
            Arthitis Australia
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
            href="http://asif.rheumanet.org/"
          >
            Ankylosin Spondylitis International Federation
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
      </ul>
    </Layout>
  )
}

export default Resources
