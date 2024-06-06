// Imports required imports from React.
import React, { useCallback, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./output.css";
import stripePromise from "../utils/stripe";

// Imports custom components.
import Header from "./components/Header";
import AgeConfirmationModal from "./components/AgeConfirmationModal";

const App = () => {
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);

  useEffect(() => {
    const ageConfirmed = localStorage.getItem("ageConfirmed");
    if (ageConfirmed) {
      setIsAgeConfirmed(true);
    }
  }, []);

  const handleAgeConfirmation = () => {
    setIsAgeConfirmed(true);
    localStorage.setItem("ageConfirmed", "true");
  };

  if (!isAgeConfirmed) {
    return <AgeConfirmationModal onConfirm={handleAgeConfirmation} />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
