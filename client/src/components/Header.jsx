import React from "react";
import CorkNForkLogo from "/corknfork-logo.svg";

export default function Header() {
  const isLoggedIn = false; // TODO: Replace with actual authentication logic.
  // TODO: Confirm that "Log In" and "Sign Up" shows up if user is not logged in, and "Log Out" shows up if user is logged in.

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={CorkNForkLogo}
            alt="Cork N Fork Logo"
            className="w-9 mr-2"
          />
          <h1 className="text-xl font-bold">CORK N FORK</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/cellar" className="hover:text-gray-400">
                Wine Cellar
              </a>
            </li>
            {!isLoggedIn && (
              <li>
                <a href="/login" className="hover:text-gray-400">
                  Log In
                </a>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <a href="/signup" className="hover:text-gray-400">
                  Sign Up
                </a>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <a href="/" className="hover:text-gray-400">
                  Log Out
                </a>
                //TODO: Insert logic for signing user out.
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
