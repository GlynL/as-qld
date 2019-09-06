import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

class Stripe extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_UnQ6LvpgJUiToF25uFa32Ton">
        <div>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    )
  }
}

export default Stripe
