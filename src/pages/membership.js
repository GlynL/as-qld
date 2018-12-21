import React from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from '../components/CheckoutForm'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Title from '../components/h1'

const Membership = () => (
  <StripeProvider apiKey="pk_test_UnQ6LvpgJUiToF25uFa32Ton">
    <Layout>
      <SEO title="Membership" />
      <Title>Become a Member</Title>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, aperiam
        amet, doloribus enim delectus, numquam distinctio provident quod
        architecto in vitae ex doloremque fugiat incidunt nemo saepe repudiandae
        nulla corporis!
      </p>
      <p>
        Adipisci aut quos esse impedit voluptatem delectus ad nam, quibusdam,
        natus hic architecto sit consequuntur repellat cum sapiente officia,
        vero iusto. Laborum hic illo accusamus consequatur distinctio aperiam
        error sapiente?
      </p>
      <p>
        Eligendi, suscipit. Optio soluta cum quod veritatis quas inventore porro
        consequatur dicta nemo voluptas. Laudantium atque sunt, illo esse modi
        nobis delectus laborum doloribus quam nemo eligendi neque cupiditate
        hic.
      </p>
      <div className="example">
        <h1>React Stripe Elements Example</h1>
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    </Layout>
  </StripeProvider>
)

export default Membership
