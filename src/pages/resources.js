import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/h1'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { options } from '../helpers/dataTransform'

const Resources = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.content.title} />
      <Title>{data.content.title}</Title>
      {documentToReactComponents(data.content.content.json, options)}
    </Layout>
  )
}

export const query = graphql`
  {
    content: contentfulContentPage(title: { eq: "Resources" }) {
      title
      content {
        json
      }
    }
  }
`

export default Resources
