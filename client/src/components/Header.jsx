import React from "react";

// Imports the custom files needed below.
import CorkNForkLogo from "/corknfork-logo.svg";

// Sets up the structure of the header and navigation bar.

//TODO: Make it so Log Out only appears when you are logged in and vice versa for log in and sign up.

export default function Header() {
  return (
    <header>
      <div>
        <img src={CorkNForkLogo} alt="Cork N Fork Logo" className="w-9" />
        <h1>CORK N FORK</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Wine Cellar</li>
          <li>Log In</li>
          <li>Sign Up</li>
          <li>Log Out</li>
        </ul>
      </nav>
    </header>
  );
}
