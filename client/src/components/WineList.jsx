import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_WINES } from "../utils/queries";

// Functional component for displaying a list of wines
const WineList = ({ wines }) => {
  // Destructure loading, data, and error from the useQuery hook
  const { loading, data, error } = useQuery(QUERY_WINES);
  // Extract wines from data or set to an empty array if data is undefined
  const winesData = data?.wines || wines;

  // Display a loading message while the query is in progress
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display an error message if there is an error fetching the data
  if (error) {
    console.error("Error fetching wines:", error);
    return <div>Error loading wines.</div>;
  }

  // Log the fetched wines to the console for debugging purposes
  console.log("Fetched wines:", winesData);

  // Return the JSX to render the list of wines or a message if no wines are available
  return (
    <div className="space-y-4">
      {winesData.length ? (
        // Map over the wines array and render each wine item
        winesData.map((wine) => (
          <div key={wine._id} className="border rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold">{wine.name}</h3>
            <img
              src={wine.image}
              alt={wine.name}
              className="w-full h-48 object-contain mb-2"
            />
            <p>
              <strong>Flavors:</strong> {wine.flavors.join(", ")}
            </p>
            <p>
              <strong>Pairs With:</strong> {wine.pairs.join(", ")}
            </p>
          </div>
        ))
      ) : (
        // Display a message if no wines are available
        <h3>No Wines Available</h3>
      )}
    </div>
  );
};

// Export the WineList component as the default export
export default WineList;
