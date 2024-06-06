import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// load Stripe.js with the publishable key.
const stripePromise = loadStripe("your_stripe_public_key");

const DonationPage = () => {
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default DonationPage;
