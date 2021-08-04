import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Title from '../../components/h1'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { options } from '../../helpers/dataTransform'

const Victoria = ({ data }) => {
  return (
    <Layout>
      <SEO title="Victoria" />
      <header>
        <Title>Ankylosing Spondylitis Victoria Inc</Title>
      </header>
      {documentToReactComponents(data.content.content.json, options)}
    </Layout>
  )
}

export default Victoria

export const query = graphql`
  {
    content: contentfulContentPage(
      title: { eq: "Ankylosing Spondylitis Victoria Inc" }
    ) {
      title
      content {
        json
      }
    }
  }
`
