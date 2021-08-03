import React from 'react'
import Banner from '../../components/banner-qld'
import Features from '../../components/features'
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
      <Features features={data.content.features} />
      <ClassInfo content={data.content.extraContent.json} />
      <Contact id={'mqkgddnb'} />
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
      features {
        title
        text {
          text
        }
      }
      extraContent {
        json
      }
      contactEmail
    }
  }
`
