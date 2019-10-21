import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-gap: 20px;
  max-width: 500px;
  margin: ${props => (props.center ? '0 auto' : '')};
`

const StyledDiv = styled.div``

const StyledLabel = styled.label`
  width: 120px;
`

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #333;
`

const StyledTextarea = styled(StyledInput)``

const Form = ({ address, center }) => {
  return (
    <StyledForm
      center={center}
      method="post"
      action={`https://formspree.io/${address}`}
    >
      <StyledLabel htmlFor="email">Your Email:</StyledLabel>
      <StyledInput
        id="email"
        type="email"
        name="_replyto"
        placeholder="example@email.com"
      />
      <StyledLabel htmlFor="name">Name:</StyledLabel>
      <StyledInput id="name" type="text" placeholder="John Doe" />
      <StyledLabel htmlFor="text">Message:</StyledLabel>
      <StyledInput
        as="textarea"
        id="text"
        type="text"
        rows="10"
        cols="20"
        placeholder="I'd love to know more about your events and membership."
      />
      {/* honeypot spam bot field */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
    </StyledForm>
  )
}

export default Form
