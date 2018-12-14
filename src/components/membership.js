import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`
const Benefits = styled.div`
  display: flex;
`

const Benefit = styled.div`
  margin: 2rem 4rem;
`

const Button = styled.button`
  align-self: center;
  background: hsla(30, 25%, 30%, 1);
  border-radius: 10px;
  border: none;
  padding: 0.7rem;
  color: hsl(52, 20%, 99%);
`

export default () => (
  <Container>
    <Button>Become a Member</Button>
    <Benefits>
      <Benefit>benefit</Benefit>
      <Benefit>benefit</Benefit>
      <Benefit>benefit</Benefit>
    </Benefits>
  </Container>
)
