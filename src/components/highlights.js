import React from 'react'
import styled from 'styled-components'
import Title from './h2'

const StyledSection = styled.section`
  display: flex;
  background: #fdfdfd;
`

const StyledDiv = styled.div`
  flex: 1;
  border-right: 1px solid #333;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`
const StyledDivRight = styled(StyledDiv)`
  border-right: none;
`
const StyledTitle = styled(Title)`
  align-self: center;
`

const Paragraph = styled.p`
  padding: 1rem 2rem;
`

const List = styled.ul`
  padding: 1rem 2rem;
  margin: 0;
  list-style: none;
`

export default () => (
  <StyledSection>
    <StyledDiv>
      <StyledTitle>Upcoming Events</StyledTitle>
      <List>
        <li>Event One</li>
        <li>Event Two</li>
        <li>Event Three</li>
      </List>
    </StyledDiv>
    <StyledDiv>
      <StyledTitle>About AS</StyledTitle>
      <Paragraph>
        Providing support & information to those suffering from AS.
      </Paragraph>
    </StyledDiv>
    <StyledDivRight>
      <StyledTitle>Contact</StyledTitle>
      <Paragraph>Feel free to contact us for further information.</Paragraph>
    </StyledDivRight>
  </StyledSection>
)
