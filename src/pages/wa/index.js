import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Title from '../../components/h1'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import styled from 'styled-components'

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

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      console.log(node)
      if (node.data.target.fields) {
        return (
          <StyledImg
            src={node.data.target.fields.file['en-US'].url + '?w=300&h=300'}
          />
        )
      }
    },
  },
}

const StyledImg = styled.img`
  margin-left: 20px;
  border: 1px solid var(--banner-bg-color);
`
