import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { QUERY_DONATION } from "../utils/queries";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const DonationPage = () => {
  useEffect(() => {
    if (!stripePromise) {
      return;
    }
  })
}