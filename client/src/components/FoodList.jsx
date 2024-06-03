import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_FOODS } from "../utils/queries";

// Functional component for displaying a list of foods
const FoodList = () => {
  // Destructure loading, data, and error from the useQuery hook
  const { loading, data, error } = useQuery(QUERY_FOODS);
  // Extract foods from data or set to an empty array if data is undefined
  const foods = data?.foods || [];

  // Display a loading message while the query is in progress
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display an error message if there is an error fetching the data
  if (error) {
    console.error("Error fetching foods:", error);
    return <div>Error loading foods.</div>;
  }

  // Log the fetched foods to the console for debugging purposes
  console.log("Fetched foods:", foods);

  // Return the JSX to render the list of foods or a message if no foods are available
  return (
    <div>
      {foods.length ? (
        // Map over the foods array and render each food item
        foods.map((food) => (
          <div key={food._id}>
            <h3>{food.name}</h3>
            <img src={food.image} alt={food.name} className="w-60" />
            <p>Pairs: {food.pairs.join(", ")}</p>
            <p>Flavors: {food.flavors.join(", ")}</p>
          </div>
        ))
      ) : (
        // Display a message if no foods are available
        <h3>No Foods Available</h3>
      )}
    </div>
  );
};

// Export the FoodList component as the default export
export default FoodList;
