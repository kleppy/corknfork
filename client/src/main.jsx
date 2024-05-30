// Imports required imports from React.
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// imports Tailwind CSS
import "../src/index.css";

// Imports the App.jsx file which works with the router.
import App from "./App";

// imports the CSS file for Tailwind CSS
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//TODO: Add more pages here and under src/pages based on our discussion of how the cellar should work.

// Imports pages the router will use to conditionally show the appropriate views.
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import CellarPage from "./pages/CellarPage";

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

// Renders the RouterProvider component to the HTML.
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
