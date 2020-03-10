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
        <h2>Hydrotherapy Classes</h2>
        <div>
          <p>Sessions supervised by experienced Physiotherapists.</p>
          <p>
            <strong>When:</strong> Monday evenings (Public holidays excepted).
          </p>
          <p>
            <strong>Time:</strong> Two sessions.
            <br />
            Hydrotherapy pool 5:45 or 6:45pm.
            <br />
            Gymnasium & pool 5:45 & 6:45pm.
            <br />
            For those current group members and those who have recently
            participated in an AS program with the Hospital or the Arthritis
            Foundation.
          </p>
          <p>
            <strong>Where:</strong> Arthritis Wyllie Centre, 17 Lemnos Str,
            SHENTON PARK.
          </p>
          <p>
            <strong>Cost:</strong> $12.00
          </p>
          <p>
            <strong>Enquiries:</strong> (08) 9388 2199
            <br />
            <a href="https://www.arthritiswa.org.au" target="_blank">
              www.arthritiswa.org.au
            </a>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default WesternAustralia
