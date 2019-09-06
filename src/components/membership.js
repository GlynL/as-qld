import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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

const StyledLink = styled(Link)`
  align-self: center;
  background: hsla(30, 25%, 30%, 1);
  border-radius: 10px;
  border: 1px solid hsla(30, 25%, 30%, 1);
  padding: 0.7rem;
  color: hsl(52, 20%, 99%);
  text-decoration: none;

  :hover {
    border: 1px solid hsla(30, 25%, 30%, 1);
    background: none;
    color: hsla(30, 25%, 30%, 1);
  }
`

export default () => (
  <Container>
    <StyledLink to="/membership">Become a Member</StyledLink>
    <Benefits>
      <Benefit>benefit</Benefit>
      <Benefit>benefit</Benefit>
      <Benefit>benefit</Benefit>
    </Benefits>
  </Container>
)
