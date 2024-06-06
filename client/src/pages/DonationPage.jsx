// import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// const DonationForm = () => {
//   const [amount, setAmount] = useState(0);
//   const [errorMessage, setErrorMessage] = useState(null); // State for error message
//   const [successMessage, setSuccessMessage] = useState(null); // State for success message
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setErrorMessage(null); // Clear previous errors
//     setSuccessMessage(null); // Clear previous success messages

//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       setErrorMessage("Stripe is not loaded. Please try again later.");
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       setErrorMessage(error.message);
//     } else {
//       // Fetch clientSecret from your backend (replace with your actual endpoint)
//       const { clientSecret } = await fetch("/create-payment-intent", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: amount * 100 }), // Send amount in cents
//       }).then((r) => r.json());

//       const { paymentIntent, error: confirmError } =
//         await stripe.confirmCardPayment(clientSecret, {
//           payment_method: paymentMethod.id,
//         });

//       if (confirmError) {
//         setErrorMessage(confirmError.message);
//       } else if (paymentIntent.status === "succeeded") {
//         setSuccessMessage("Thank you for your donation!");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="amount">Amount (USD)</label>
//       <input
//         type="number"
//         id="amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         min="1" // Prevent negative or zero values
//         required
//       />
//       <div id="card-element">
//         <CardElement />
//       </div>
//       {errorMessage && <div className="error">{errorMessage}</div>}
//       {successMessage && <div className="success">{successMessage}</div>}
//       <button type="submit" disabled={!stripe || !elements}>
//         Donate
//       </button>
//     </form>
//   );
// };

// const DonationPage = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <DonationForm />
//     </Elements>
//   );
// };

// export default DonationPage;
