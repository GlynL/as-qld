import React from 'react'
import Img from 'gatsby-image'
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
    <Highlight title={one.title} text={one.text} image={one.image} />
    <Highlight title={two.title} text={two.text} image={two.image} />
    <Highlight title={three.title} text={three.text} image={three.image} last />
  </StyledSection>
)

const Highlight = ({ title, text, image, last }) => {
  return (
    <StyledDiv last={last}>
      <StyledTitle>{title}</StyledTitle>
      {image && <Img fixed={image} style={{ margin: '0 auto' }} />}
      <Paragraph>{text}</Paragraph>
    </StyledDiv>
  )
}
