// Imports required imports from React and Apollo.
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Imports Tailwind built CSS file.
import "./output.css";

// Imports the App.jsx file which works with the router.
import App from "./App";

//TODO: Add more pages here and under src/pages based on our discussion of how the cellar should work.

// Imports pages the router will use to conditionally show the appropriate views.
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import CellarPage from "./pages/CellarPage";

const client = new ApolloClient({
  uri: "/graphql", //TODO: Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

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
    ],
  },
]);

// Renders the RouterProvider component to the HTML and wraps it in the ApolloProvider.
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
