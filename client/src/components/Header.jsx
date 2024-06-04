import React from "react";
import CorkNForkLogo from "/logo-transparent-no-buffer.png";

export default function Header() {
  const isLoggedIn = false; // TODO: Replace with actual authentication logic.
  // TODO: Confirm that "Log In" and "Sign Up" shows up if user is not logged in, and "Log Out" shows up if user is logged in.

  return (
    <header className="bg-rose text-yellow p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={CorkNForkLogo}
            alt="Cork N Fork Logo"
            className="w-40 mr-2"
          />
          {/* <h1 className="text-xl font-bold">CORK N FORK</h1> */}
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="/cellar" className="hover:text-black">
                Wine Cellar
              </a>
            </li>
            {!isLoggedIn && (
              <li>
                <a href="/login" className="hover:text-black">
                  Log In
                </a>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <a href="/signup" className="hover:text-black">
                  Sign Up
                </a>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <a href="/" className="hover:text-black">
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
