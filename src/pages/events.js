import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Title from '../components/h1'
import EventsList from '../components/events-list'

const Events = ({ data }) => (
  <Layout>
    <SEO title="Events" />
    <Title>Upcoming Events</Title>
    <EventsList events={data.allMarkdownRemark.edges} />
  </Layout>
)

export default Events

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "dddd DD MMMM YYYY")
            title
          }
        }
      }
    }
  }
`
