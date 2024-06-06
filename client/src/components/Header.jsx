import React from "react";
import Auth from "../utils/auth";
import CorkNForkLogo from "/logo-transparent-no-buffer.png";

const isLoggedIn = Auth.loggedIn();

export default function Header() {
  return (
    <header className="bg-rose text-yellow p-2 fixed top-0 w-full z-10 max-h-20">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center h-full">
          <img
            src={CorkNForkLogo}
            alt="Cork N Fork Logo"
            className="h-full max-h-16 mr-2"
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
                <a
                  href="/"
                  onClick={() => Auth.logout()}
                  className="hover:text-black"
                >
                  Log Out
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
