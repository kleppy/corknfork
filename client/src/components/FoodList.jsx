import React from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


// Functional component for displaying a list of foods
const FoodList = ({ foods, state }) => {
  // Destructure loading, data, and error from the useQuery hook
  console.log(foods)
  // Log the fetched foods to the console for debugging purposes
  console.log("Fetched foods:", foods);

  // Return the JSX to render the list of foods or a message if no foods are available
  return (
    <div className="space-y-4 text-yellow">
      {foods.length ? (
        // Map over the foods array and render each food item
        foods.map((food) => (
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
            {!state ? (
              <Link className="btn bg-burgundy hover:bg-rose text-yellow px-4 py-2 rounded-lg"
              to ={`/fpair/${food._id}`}
              >
                What Pairs with this?
              </Link>
            ) :(
              <Link className="btn bg-burgundy hover:bg-rose text-yellow px-4 py-2 rounded-lg"
              >
                Pair
              </Link>
            )}
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
