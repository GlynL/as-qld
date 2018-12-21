import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  async submit(ev) {
    let { source, error } = await this.props.stripe.createSource({
      type: 'card',
    })
    if (error) {
      // add this in
      console.log(error)
    }

    let response = await fetch('http://localhost:8080/api/users/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: source.id,
    })

    if (response.ok) console.log('Purchase Complete!')
  }

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)
