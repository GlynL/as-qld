import React from 'react'
import styled from 'styled-components'

import Header from './header'
import './layout.css'

const Layout = styled.div`
  background: var(--main-bg-color);
  min-height: 100vh;
`
const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
`

export default ({ children }) => (
  <Layout>
    <Header />
    <Container>{children}</Container>
  </Layout>
)
