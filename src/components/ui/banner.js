import React from 'react'
import styled from 'styled-components'

const StyledBanner = styled.div`
  width: 100%;
  padding: 10px 20px;
  background: var(--banner-bg-color);
  border-radius: 4px;
  margin-bottom: 20px;
`

const Banner = ({ text }) => {
  return <StyledBanner>{text}</StyledBanner>
}

export default Banner
