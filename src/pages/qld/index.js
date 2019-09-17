import React from 'react'
import Banner from '../../components/banner-qld'
import Highlights from '../../components/highlights'
import SEO from '../../components/seo'

const IndexPageQld = () => (
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

export default IndexPageQld
