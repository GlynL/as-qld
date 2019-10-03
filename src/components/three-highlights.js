import React from 'react'
import { Link } from 'gatsby'
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

const StyledDivHeading = styled.div`
  display: flex;
  justify-content: center;
`

const StyledTitle = styled(Title)`
  align-self: center;
  margin-top: 0;
`

const Paragraph = styled.p`
  padding: 0 2rem;
  margin: 0;
`

const StyledLink = styled(Link)`
  align-self: center;
  margin-top: 1rem;
`

export default ({ one, two, three }) => (
  <StyledSection>
    <Highlight
      title={one.title}
      text={one.text}
      image={one.image}
      link={one.link}
    />
    <Highlight
      title={two.title}
      text={two.text}
      image={two.image}
      link={two.link}
    />
    <Highlight
      title={three.title}
      text={three.text}
      image={three.image}
      link={three.link}
      last
    />
  </StyledSection>
)

const Highlight = ({ title, text, image, link, last }) => {
  return (
    <StyledDiv last={last}>
      <StyledDivHeading>
        <StyledTitle>{title}</StyledTitle>
        {image && <Img fixed={image} />}
      </StyledDivHeading>
      <Paragraph>{text}</Paragraph>
      <StyledLink to={link}>Find out more</StyledLink>
    </StyledDiv>
  )
}
