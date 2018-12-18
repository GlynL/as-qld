import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Title from '../components/h1'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`

const ListItem = styled.li`
  margin-bottom: 2rem;
`

const Small = styled.p`
  font-size: 0.7rem;
  opacity: 0.8;
`

const Heading = styled.h2`
  margin-bottom: 0;
`

const renderEvents = data => {
  const events = data.allMarkdownRemark.edges
  return events.map(({ node: event }) => (
    <StyledLink to={`/events/${event.fields.slug}`}>
      {console.log(event)}
      <ListItem key={event.fields.slug}>
        <Heading>{event.frontmatter.title}</Heading>
        <Small>{event.frontmatter.date}</Small>
        <div
          dangerouslySetInnerHTML={{ __html: event.frontmatter.description }}
        />
      </ListItem>
    </StyledLink>
  ))
}

const Events = ({ data }) => (
  <Layout>
    <SEO title="Events" />
    <Title>Upcoming Events</Title>
    <List>{renderEvents(data)}</List>
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
            description
          }
        }
      }
    }
  }
`
