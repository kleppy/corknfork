import React from "react";

export default function HomePage() {
  return (
    <div>
      {/* TODO: Change "Personal" to Users name. */}
      {/* TODO: Make it so all listed wines, foods, and pairs come from that users database. */}
      <h1>Personal Wine Cellar</h1>
      <div>
        <h2>Saved Foods</h2>
        <ul>
          <li>Food A</li>
          <li>Food B</li>
          <li>Food C</li>
        </ul>
      </div>
      <div>
        <h2>Saved Wines</h2>
        <ul>
          <li>Wine A</li>
          <li>Wine B</li>
          <li>Wine C</li>
        </ul>
      </div>
      <div>
        <h2>Saved Pairings</h2>
        <ul>
          <li>Pair A</li>
          <li>Pair B</li>
          <li>Pair C</li>
        </ul>
      </div>
    </div>
  );
}
