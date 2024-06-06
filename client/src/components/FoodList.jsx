import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_FOODS } from "../utils/queries";

// Functional component for displaying a list of foods
const FoodList = ({ foods }) => {
  // Destructure loading, data, and error from the useQuery hook
  const { loading, data, error } = useQuery(QUERY_FOODS);
  // Extract foods from data or set to an empty array if data is undefined
  const foodsData = data?.foods || foods;

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
  console.log("Fetched foods:", foodsData);

  // Return the JSX to render the list of foods or a message if no foods are available
  return (
    <div className="space-y-4">
      {foodsData.length ? (
        // Map over the foods array and render each food item
        foodsData.map((food) => (
          <div key={food._id} className="border rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold">{food.name}</h3>
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-48 object-contain mb-2"
            />
            <p>
              <strong>Flavors:</strong> {food.flavors.join(", ")}
            </p>
            <p className="mb-2">
              <strong>Pairs With:</strong> {food.pairs.join(", ")}
            </p>
            <button className="bg-burgundy hover:bg-rose text-white px-4 py-2 rounded-lg">
              What Pairs with this?
            </button>
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
