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
          <p>
            Our Mission Statement: The AS Vic Inc is an organisation of people
            with Ankylosing Spondylitis who wish to improve knowledge and
            ability to manage the condition.
          </p>
          <p>
            Our group shares a number of goals and objectives for people and
            families living with Ankylosing Spondylitis.
          </p>
          <p>
            We aim to provide the following:
            <ul>
              <li>
                Provide a forum for the exchange of ideas and experiences.
              </li>
              <li>
                Distribute information to patients and medical professionals on
                AS.
              </li>
              <li>
                Provide and co-ordinate educational information, events,
                workshops and seminars on AS.
              </li>
              <li>
                Co-operate and interact with local, interstate, international
                Arthritis and peer support groups including participation in
                their events and activities.
              </li>
              <li>
                Arrange social events and activities for our group members,
                their families and friends
              </li>
            </ul>
          </p>
          <p>
            Visit our web site for further details -{' '}
            <a
              href="https://www.asvictoria.org"
              target="_blank"
              rel="nooopener noreferrer"
            >
              AS Victoria
            </a>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Victoria
