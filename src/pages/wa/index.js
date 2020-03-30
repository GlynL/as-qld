import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Title from '../../components/h1'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { options } from '../../helpers/dataTransform'

const WesternAustralia = ({ data }) => {
  return (
    <Layout>
      <SEO title="Western Australia" />
      <header>
        <Title>Hydrotherapy Classes in WA</Title>
      </header>
      {documentToReactComponents(data.content.content.json, options)}
    </Layout>
  )
}

export default WesternAustralia

export const query = graphql`
  {
    content: contentfulContentPage(
      title: { eq: "Hydrotherapy Classes in WA" }
    ) {
      title
      content {
        json
      }
    }
  }
`
