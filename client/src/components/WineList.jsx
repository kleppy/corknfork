import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Functional component for displaying a list of wines
const WineList = ({ wines, state }) => {
  // Destructure loading, data, and error from the useQuery hook

  // Log the fetched wines to the console for debugging purposes
  console.log("Fetched wines:", wines);

  // Return the JSX to render the list of wines or a message if no wines are available
  return (
    <div className="space-y-4 text-yellow">
      {wines.length ? (
        // Map over the wines array and render each wine item
        wines.map((wine) => (
          <div
            key={wine._id}
            className="bg-white bg-opacity-25 border rounded-lg p-4 shadow"
          >
            <h3 className="text-xl font-semibold">{wine.name}</h3>
            <img
              src={wine.image}
              alt={wine.name}
              className="w-full h-48 object-contain mb-2"
            />
            <p>
              <strong>Flavors:</strong> {wine.flavors.join(", ")}
            </p>
            <p className="mb-2">
              <strong>Pairs With:</strong> {wine.pairs.join(", ")}
            </p>
            {!state ? (
              <Link
                className="btn bg-burgundy hover:bg-black text-yellow px-4 py-2 rounded-lg"
                to={`/wpair/${wine._id}`}
              >
                What Pairs with this?
              </Link>
            ) : (
              <Link className="btn bg-burgundy hover:bg-black text-yellow px-4 py-2 rounded-lg">
                Pair
              </Link>
            )}
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
