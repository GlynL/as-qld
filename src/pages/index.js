import React from 'react'
import Banner from '../components/banner'
import Highlights from '../components/highlights'
import SEO from '../components/seo'
import ThreeHighlights from '../components/three-highlights'
import { infoHighlights } from '../data'

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
    <ThreeHighlights
      one={infoHighlights.aboutAS}
      two={infoHighlights.resources}
      three={infoHighlights.contact}
    />
  </div>
)

export default IndexPage
