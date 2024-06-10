import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { CREATE_PAYMENT_INTENT } from "../utils/mutations"; 

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [createPaymentIntent, { data }] = useMutation(CREATE_PAYMENT_INTENT);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      return;
    }

    const { data } = await createPaymentIntent({
      variables: { amount: 1000 }, // Amount in cents (e.g., $10)
    });

    const { clientSecret } = data.createPaymentIntent;

    const { error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: paymentMethod.id,
      }
    );

    if (confirmError) {
      setError(confirmError.message);
    } else {
      // Payment succeeded
      console.log("Payment Successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <div>{error}</div>}
      <button type="submit" disabled={!stripe || !elements}>
        Donate
      </button>
    </form>
  );
};

const DonationPage = () => {
  console.log("DonationPage is rendering!");
  return (
    <Elements stripe={stripePromise}>
      {stripe && <CheckoutForm />}
    </Elements>
  );
};

export default DonationPage;
