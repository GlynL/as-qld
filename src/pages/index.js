import React from 'react'
import Banner from '../components/banner'
import Highlights from '../components/highlights'
import SEO from '../components/seo'

const IndexPage = () => (
  <div>
    <SEO
      title="Home"
      keywords={[
        'as',
        'ankylosing spondylitis',
        'australia',
        'queensland',
        'qld',
      ]}
    />
    <Banner />
    <Highlights />
  </div>
)

export default IndexPage
