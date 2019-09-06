import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import styled from 'styled-components'

const Checkout = styled.div`
  padding: 1rem;
  border-radius: 5px;
  background: #f2f2f299;
  max-width: 400px;
`

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: '',
      complete: false,
    }
    this.submit = this.submit.bind(this)
  }

  async submit(e) {
    try {
      const { source } = await this.props.stripe.createSource({
        type: 'card',
      })

      const response = await fetch(
        'http://localhost:8080/api/users/subscribe',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNWMxYjUxZjc0NzM4ZjQ0OTg4ZGY3YzEzIiwiaWF0IjoxNTQ1MzcwNzQ5fQ.XFQXuL-JB6C2-XaYJruxVXD0LGmL881i9VV1Y882W7w',
          },
          body: JSON.stringify({ id: source.id }),
        }
      )

      if (!response.ok) throw new Error('Something went wrong.')
      this.setState({ complete: true })
      console.log('worked ok')
    } catch (err) {
      this.setState({
        errorMessage:
          'Something went wrong. Please try again or contact us for assistance.',
      })
    }
  }

  render() {
    if (this.state.complete) return <p>Subscribed successfully.</p>
    return (
      <Checkout>
        <p>Become a member now.</p>
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </Checkout>
    )
  }
}

export default injectStripe(CheckoutForm)
