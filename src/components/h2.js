import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
  margin: 1rem;
`

export default ({ className, children }) => (
  <StyledTitle className={className}>{children}</StyledTitle>
)
