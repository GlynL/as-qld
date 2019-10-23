import React from 'react'
import Banner from '../../components/banner-qld'
import Highlights from '../../components/highlights'
import Contact from '../../components/contact'
import ClassInfo from '../../components/class-info'
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
    <ClassInfo />
    <Contact />
  </div>
)

export default IndexPageQld
