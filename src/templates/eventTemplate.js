import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const Small = styled.p`
  font-size: 0.7rem;
  opacity: 0.8;
`
const Title = styled.h1`
  margin-bottom: 0;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  // const { markdownRemark } = data // data.markdownRemark holds our post data
  // const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div>
        <header>
          <Title>{frontmatter.title}</Title>
          <Small>{frontmatter.date}</Small>
        </header>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div>{frontmatter.description}</div>
      </div>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//       }
//       fields {
//         slug
//       }
//     }
//   }
// `
