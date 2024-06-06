// Imports required imports from React.
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Imports required imports from Apollo.
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// Imports tailwind created CSS.
import "./output.css";

// Imports the App.jsx file which works with the router.
import App from "./App";

// Imports pages the router will use to conditionally show the appropriate views.
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import CellarPage from "./pages/CellarPage";
import DonationPage from "./pages/DonationPage";

// Defines the accessible routes, and which components to respond to which URL.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/cellar",
        element: <CellarPage />,
      },
      {
        path: "/donation",
        element: <DonationPage />,
      },
    ],
  },
]);

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "graphql",
  cache: new InMemoryCache(),
});

// Renders the RouterProvider component wrapped in an Apollo client to the HTML.
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
