import React, { Component } from 'react'

import Layout from '../components/layout'

import Stripe from '../components/stripe'
import Title from '../components/h1'

class Membership extends Component {
  render() {
    return (
      <Layout>
        <Title>Become a Member</Title>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
          aperiam amet, doloribus enim delectus, numquam distinctio provident
          quod architecto in vitae ex doloremque fugiat incidunt nemo saepe
          repudiandae nulla corporis!
        </p>
        <p>
          Adipisci aut quos esse impedit voluptatem delectus ad nam, quibusdam,
          natus hic architecto sit consequuntur repellat cum sapiente officia,
          vero iusto. Laborum hic illo accusamus consequatur distinctio aperiam
          error sapiente?
        </p>
        <p>
          Eligendi, suscipit. Optio soluta cum quod veritatis quas inventore
          porro consequatur dicta nemo voluptas. Laudantium atque sunt, illo
          esse modi nobis delectus laborum doloribus quam nemo eligendi neque
          cupiditate hic.
        </p>
        <Stripe />
      </Layout>
    )
  }
}

export default Membership
