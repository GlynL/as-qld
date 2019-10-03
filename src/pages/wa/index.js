import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Title from '../../components/h1'

const WesternAustralia = () => {
  return (
    <Layout>
      <SEO title="Western Australia" />
      <header>
        <Title>Hydrotherapy Classes in WA</Title>
      </header>
      <section>
        <div>
          <p>
            <strong>Hydrotherapy Classes</strong> are held at the Royal Perth
            Rehabilitation Hospital every Monday evening (except Public
            Holidays).
          </p>
          <p>
            <strong>Where:</strong> Royal Perth Rehabilitation Hospital Shenton
            Park Annex, Selby St., Shenton Park
          </p>
          <p>
            <strong>When:</strong> Every Monday evening (Public Holidays
            excepted) 5:30pm Hydrotherapy exercises at Hydrotherapy Pool 5:45pm
            Land Exercises at Gymnasium Total session time is 2 hours with
            groups changing over at the end of the 1st hour
          </p>
          <p>
            <strong>Cost:</strong> $7.00
          </p>
          <p>
            <strong>Contact:</strong> 08 9382 7307 - Lindsay
          </p>
          <p>
            <strong>Note:</strong> All sessions are conducted by experienced
            Physiotherapists
          </p>
          <p>
            <strong>
              Another AS/spinal mobility Pool class is available at:
            </strong>{' '}
            South Care, St John of God Hospital - for details phone: 08 9366
            1730
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default WesternAustralia
