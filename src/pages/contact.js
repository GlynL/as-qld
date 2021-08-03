import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/form'
import Title from '../components/h1'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { options } from '../helpers/dataTransform'

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <Title>Contact</Title>
      <div>
        <h2>National</h2>
        <Form id="xdopllbe" />
      </div>
      {documentToReactComponents(data.content.content.json, options)}
    </Layout>
  )
}

export const query = graphql`
  {
    content: contentfulContactPage {
      title
      content {
        json
      }
    }
  }
`

export default Contact
