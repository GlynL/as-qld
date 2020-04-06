import React from 'react'
import styled from 'styled-components'
import Title from './h2'
import Form from '../components/form'

const StyledTitle = styled(Title)`
  text-align: center;
`

const StyledSection = styled.section`
  padding: 20px 50px;
  margin: 0 auto;
  background: #f2f2f2;
`

const Contact = () => {
  return (
    <StyledSection id="contact">
      <StyledTitle>Contact</StyledTitle>
      <Form center address="qld@asaustralia.org" />
    </StyledSection>
  )
}

export default Contact
