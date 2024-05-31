import React from "react";

// Imports the custom files.
import pear from "/pear.svg";

//TODO: Make it so each pear icon links to another page or a modal with paired opposites of it's associated list item.

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <h2>Foods</h2>
        <ul>
          <li className="flex items-center">
            Food A<img src={pear} alt="Pear Icon" className="w-4 ml-2" />
          </li>
          <li className="flex items-center">
            Food B<img src={pear} alt="Pear Icon" className="w-4 ml-2" />
          </li>
          <li className="flex items-center">
            Food C<img src={pear} alt="Pear Icon" className="w-4 ml-2" />
          </li>
        </ul>
      </div>
      <div>
        <h2>Wines</h2>
        <ul>
          <li className="flex items-center">
            Wine A<img src={pear} alt="Pear Icon" className="w-4 ml-2" />
          </li>
          <li className="flex items-center">
            Wine B<img src={pear} alt="Pear Icon" className="w-4 ml-2" />
          </li>
          <li className="flex items-center">
            Wine C<img src={pear} alt="Pear Icon" className="w-4 ml-2" />
          </li>
        </ul>
      </div>
    </div>
  );
}
