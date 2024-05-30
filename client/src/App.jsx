// Imports required imports from React.
import React from "react";
import { Outlet } from "react-router-dom";

// Imports repeated components for header.
import Header from "./components/Header";

function App() {
  // Outlet component conditionally swaps between the different pages according to the URL.
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
