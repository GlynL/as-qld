import React from 'react'
import styled from 'styled-components'
import Title from './h2'

const StyledSection = styled.section`
  display: flex;
  background: #fdfdfd;
  padding-top: 50px;
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
      <StyledTitle>Events</StyledTitle>
      <Paragraph>
        The group arranges social events and activities from time to time. This
        is an opportunity for people to meet, chat and support each other. This
        includes dinners, picnics, pizza evenings after hydro (open to all
        whether attending hydro or not).
        <br />
        Members are sent email notification of events when they are organised.
      </Paragraph>
    </StyledDiv>
    <StyledDivRight>
      <StyledTitle>Membership</StyledTitle>
      <Paragraph>
        Members receive a newsletter 3 – 4 times per year which includes current
        Australian and International news, advances in management, details of
        educational and social events, and a regular exercise segment.
      </Paragraph>
    </StyledDivRight>
  </StyledSection>
)
