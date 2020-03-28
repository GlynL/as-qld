import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/h1'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const About = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.content.title} />
      <Title>{data.content.title}</Title>
      {documentToReactComponents(data.content.content.json)}
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    content: contentfulContentPage(
      title: { eq: "About Ankylosing Spondylitis (AS)" }
    ) {
      title
      content {
        json
      }
    }
  }
`
