import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/h1'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'

// issues with rendering embeddeed assets with hot reloading
// https://github.com/contentful/rich-text/issues/94
// https://github.com/gatsbyjs/gatsby/pull/15084
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
