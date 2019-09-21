import React from "react"
import { RedButton, YellowButton } from "../ReusableComponents/buttons"

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_optxHXbnX7XULkArnGqqHNcY", {
      betas: ["checkout_beta_4"],
    })
    console.log(this.stripe)
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_EUiE8Typ6eH2vY", quantity: 1 }],
      successUrl: `http://localhost:8000/`,
      cancelUrl: this.props.cancelRedirectLink,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {
    return (
      <>
        {this.props.red ? (
          <RedButton onClick={event => this.redirectToCheckout(event)}>
            Sign Up
          </RedButton>
        ) : this.props.yellow ? (
          <YellowButton onClick={event => this.redirectToCheckout(event)}>
            Sign Up
          </YellowButton>
        ) : null}
      </>
    )
  }
}

export default Checkout
