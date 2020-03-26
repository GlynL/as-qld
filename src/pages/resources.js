import React from 'react'
import { withPrefix, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/h1'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'

const Image = ({ node, children }) => (
  <StyledImg src={node.data.target.fields.file['en-US'].url} />
)

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      console.log(node)
      if (node.data.target.fields) {
        return <Image node={node}>{children}</Image>
      }
    },
  },
}

const StyledUl = styled.ul`
  list-style: none;
`

const StyledImg = styled.img`
  margin-left: 20px;
  border: 1px solid var(--banner-bg-color);
`

const Resources = ({ data }) => {
  console.log(data)
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
