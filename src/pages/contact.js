import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Form from '../components/form'
import Title from '../components/h1'

const Contact = () => (
  <Layout>
    <SEO title="About" />
    <Title>Contact</Title>
    <div>
      <h2>National</h2>
      <Form address="info@asaustralia.org" />
    </div>
    <div>
      <h2>Queensland</h2>
      <Link to="/qld#contact">Send a message</Link>
    </div>
    <div>
      <h2>Victoria</h2>
      <p>
        Ankylosing Spondylitis Victoria Inc
        <br />
        PO Box 3166, Burnley North 3121
      </p>
      <p>
        Annie McPherson
        <br />
        m: 0408 343 104
        <br />
        e:
        <a href="mailto:asvictreasurer@hotmail.com">
          asvictreasurer@hotmail.com
        </a>
      </p>
      <p>
        <a
          href="www.facebook.com/asgroupvic"
          rel="noopener noreferrer"
          target="_blank"
        >
          www.facebook.com/asgroupvic
        </a>
      </p>

      <p>
        Webmaster: <a href="mailto:asvicweb@gmail.com">asvicweb@gmail.com</a>
      </p>
    </div>
    <div>
      <h2>Western Australia</h2>
      <p>
        <a
          href="https://www.arthritiswa.org.au/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Visit website
        </a>
      </p>
    </div>
    <div>
      <h2>Other</h2>
      <p>
        People in other states are encouraged and invited to join the QLD or Vic
        group. 
      </p>
      <p>
        For queries and local information in other states – we encourage you to
        contact your state Arthritis Foundation 1800 011 041
      </p>
    </div>
  </Layout>
)

export default Contact
