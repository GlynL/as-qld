import React from 'react'
import Title from './h2'
import styled from 'styled-components'
import { options } from '../helpers/dataTransform'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Banner from './ui/banner'

const StyledTitle = styled(Title)`
  text-align: center;
`

const StyledSection = styled.section`
  padding: 50px 100px;
  background: var(--main-bg-color);
`

const ClassInfo = ({ content }) => {
  return (
    <StyledSection>
      <StyledTitle>Class Info</StyledTitle>
      {documentToReactComponents(content, options)}
    </StyledSection>
  )
}

export default ClassInfo
