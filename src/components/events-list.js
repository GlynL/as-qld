import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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
const renderEvents = events =>
  events.map(({ node: event }) => (
    <ListItem key={event.fields.slug}>
      <StyledLink to={`/events${event.fields.slug}`}>
        <Heading>{event.frontmatter.title}</Heading>
        <Small>{event.frontmatter.date}</Small>
        <div dangerouslySetInnerHTML={{ __html: event.html }} />
      </StyledLink>
    </ListItem>
  ))

export default ({ events }) => {
  const upcomingEvents = events.filter(({ node: event }) => {
    const date = new Date(event.frontmatter.date)
    const now = new Date()
    return date > now
  })

  if (upcomingEvents.length === 0) return <div>No upcoming events.</div>
  return <List>{renderEvents(upcomingEvents)}</List>
}
