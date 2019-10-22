import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Title from '../../components/h1'

const Victoria = () => {
  return (
    <Layout>
      <SEO title="Victoria" />
      <header>
        <Title>Ankylosing Spondylitis Victoria Inc</Title>
      </header>
      <section>
        <div>
          <div>
            <h2>Our Mission</h2>
            <p>
              We aim to provide the following:
              <ul>
                <li>
                  Provide a forum for the exchange of ideas and experiences.
                </li>
                <li>
                  Provide and distribute information to patients and medical
                  professionals on Ankylosing Spondylitis
                </li>
                <li>
                  Provide educational events, workshops and seminars on
                  Ankylosing Spondylitis information
                </li>
                <li>
                  Co-ordinate with local, interstate and international Arthritis
                  and peer support groups on related events and activities
                </li>
                <li>
                  Arrange social events and activities for our group’s members,
                  their families and friends
                </li>
              </ul>
            </p>
          </div>
          {/* <div>
            <h2>About us</h2>
            <p>
              Ankylosing Spondylitis Victoria Inc is an organisation of people
              who wish to improve knowledge of AS and the ability to manage the
              condition. Our group shares a number of goals and objectives for
              people and families living with Ankylosing Spondylitis as set out
              in "Our Mission Statement" on Home page.
            </p>
            <p>
              Ankylosing Spondylitis Victoria Inc is registered as a charity
              with the Australian Charities and Not-for-profits Commission ABN
              66 915 454 826
            </p>
            <p>
              AS Vic Inc has support from and interaction with many
              organisations and individuals these are our main connections.
            </p>
          </div> */}
          <div>
            <h2>Further Details</h2>
            <p>
              Visit our web site -{' '}
              <a
                href="https://www.asvictoria.org"
                target="_blank"
                rel="nooopener noreferrer"
              >
                AS Victoria
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Victoria
