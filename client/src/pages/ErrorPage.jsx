import React from "react";
import { Link } from "react-router-dom";

//TODO: Add CSS that makes this page look nice.
export default function ErrorPage() {
  return (
    <div>
      <h1>Error Page</h1>
      <p>Oops! Something went wrong.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
