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
          <li>
            Food A<img src={pear} alt="Pear Icon" class="w-4" />
          </li>
          <li>
            Food B<img src={pear} alt="Pear Icon" class="w-4" />
          </li>
          <li>
            Food C<img src={pear} alt="Pear Icon" class="w-4" />
          </li>
        </ul>
      </div>
      <div>
        <h2>Wines</h2>
        <ul>
          <li>
            Wine A<img src={pear} alt="Pear Icon" class="w-4" />
          </li>
          <li>
            Wine B<img src={pear} alt="Pear Icon" class="w-4" />
          </li>
          <li>
            Wine C<img src={pear} alt="Pear Icon" class="w-4" />
          </li>
        </ul>
      </div>
    </div>
  );
}