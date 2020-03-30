import React from 'react'
import Banner from '../../components/banner-qld'
import Highlights from '../../components/highlights'
import Contact from '../../components/contact'
import SEO from '../../components/seo'
import ClassInfo from '../../components/class-info'

const IndexPageQld = ({ data }) => {
  return (
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
      <ClassInfo content={data.content.extraContent.json} />
      <Contact email={data.content.contactEmail} />
    </div>
  )
}
export default IndexPageQld

export const query = graphql`
  query qldPageQuery {
    content: contentfulQldPage {
      title
      blurb {
        blurb
      }
      extraContent {
        json
      }
      contactEmail
    }
  }
`
