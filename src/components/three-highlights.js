import React from 'react'
import styled from 'styled-components'
import Title from './h2'

const StyledSection = styled.section`
  display: flex;
`

const StyledDiv = styled.div`
  flex: 1;
  border-right: ${props => (props.last ? 'none' : '1px solid #333')};
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 2rem 1rem;
`
const StyledTitle = styled(Title)`
  align-self: center;
  margin-top: 0;
`

const Paragraph = styled.p`
  padding: 0 2rem;
  margin: 0;
`

export default ({ one, two, three }) => (
  <StyledSection>
    <Highlight title={one.title} text={one.text} />
    <Highlight title={two.title} text={two.text} />
    <Highlight title={three.title} text={three.text} last />
  </StyledSection>
)

const Highlight = ({ title, text, last }) => {
  return (
    <StyledDiv last={last}>
      <StyledTitle>{title}</StyledTitle>
      <Paragraph>{text}</Paragraph>
    </StyledDiv>
  )
}
