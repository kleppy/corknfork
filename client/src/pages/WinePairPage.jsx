import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ADD_PAIR } from "../utils/mutations";
import { QUERY_WINE, QUERY_USER, QUERY_FOODS } from "../utils/queries";
import Auth from "../utils/auth";

const WinePairPage = () => {
  const { wineId } = useParams();
  const { data: dataFoods } = useQuery(QUERY_FOODS);
  const foods = dataFoods?.foods || [];
  const { data: dataWine } = useQuery(QUERY_WINE, {
    variables: { wineId: wineId },
  });

  const wine = dataWine?.wine || {};
  const winePairs = wine.pairs || [];

  if (Auth.loggedIn()) {
    const userId = Auth.getProfile().data._id;
    const { loading, data } = useQuery(QUERY_USER, {
      variables: { userId: userId },
    });
    const user = data?.user || {};

    // Filter foods based on food.flavor and wine.pairs.
    const preferredFoods = foods.filter((food) =>
      food.flavors.some((flavor) => winePairs.includes(flavor))
    );

    return (
      <div className="pt-20">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">
            {wine.name}'s Pairing Board
          </h2>
          <div key={wine._id} className="border rounded-lg p-4 shadow">
            <h3 className="text-xl text-yellow font-semibold">{wine.name}</h3>
            <img
              src={`/${wine.image}`}
              alt={wine.name}
              className="w-full h-48 object-contain mb-2"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Preferred Pairs</h2>
          {preferredFoods.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {preferredFoods.map((food) => (
                <div key={food._id} className="border rounded-lg p-4 shadow">
                  <h3 className="text-xl font-semibold">{food.name}</h3>
                  <img
                    src={`/${food.image}`}
                    alt={food.name}
                    className="w-full h-48 object-contain mb-2"
                  />
                  <p className="text-gray-700">
                    Flavors: {food.flavors.join(", ")}
                  </p>
                  <button className="bg-burgundy hover:bg-rose text-white font-bold py-2 px-4 rounded mt-2">
                    Save Pair
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div>No preferred pairs found.</div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center px-4">
        You need to be logged in to add Pairs!
      </h2>
      <Link
        to="/login"
        className="bg-burgundy hover:bg-rose text-white font-bold py-2 px-4 rounded mb-4"
      >
        Go to Login
      </Link>
      <Link
        to="/signup"
        className="bg-burgundy hover:bg-rose text-white font-bold py-2 px-4 rounded "
      >
        Go to Signup
      </Link>
    </div>
  );
};

export default WinePairPage;
