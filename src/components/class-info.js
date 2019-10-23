import React from 'react'
import Title from './h2'
import styled from 'styled-components'

const StyledTitle = styled(Title)`
  text-align: center;
`

const StyledSection = styled.section`
  padding: 50px 100px;
  background: var(--main-bg-color);
`

const ClassInfo = () => {
  return (
    <StyledSection>
      <StyledTitle>Class Info</StyledTitle>
      <div>
        <p>Sessions supervised by Margaret Lewington (Physiotherapist).</p>
        <p>
          <strong>When: </strong>Tuesday evenings
        </p>
        <p>
          <strong>Time: </strong>6:30 - 7:30pm
        </p>
        <p>
          <strong>Where: </strong>Hydrotherapy Pool, Level 2, Ned Hanlon
          Building Royal Brisbane & Women's Hospital, Butterfield St, HERSTON
        </p>
        <p>
          <strong>Cost: </strong>$15 or 10 classes for $140
        </p>
        <p>
          <strong>Enquiries: </strong>Margaret - 0404 414 501
        </p>
      </div>
    </StyledSection>
  )
}

export default ClassInfo
