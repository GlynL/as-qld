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
  ${props => !props.last && 'border-right: 1px solid #333;'}
  display: flex;
  flex-direction: column;
  padding: 1rem;
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

export default ({ features }) => {
  return (
    <StyledSection>
      {features.map((feature, i) => {
        return (
          <StyledDiv last={features.length - 1 === i}>
            <StyledTitle>{feature.title}</StyledTitle>
            <Paragraph>{feature.text.text}</Paragraph>
          </StyledDiv>
        )
      })}
    </StyledSection>
  )
}
