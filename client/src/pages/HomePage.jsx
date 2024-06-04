// Imports React and Apollo functions.
import React from "react";
import { useQuery, gql } from "@apollo/client";

// Imports the custom files.
import pear from "/pear.svg";
import FoodList from "../components/FoodList";
import WineList from "../components/WineList";
import { QUERY_FOODS, QUERY_WINES } from "../utils/queries";

export default function HomePage() {
  const { loading: loadingFoods, data: dataFoods } = useQuery(QUERY_FOODS);
  const { loading: loadingWines, data: dataWines } = useQuery(QUERY_WINES);
  const foods = dataFoods?.foods || [];
  const wines = dataWines?.wines || [];

  if (loadingFoods || loadingWines) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">Foods</h2>
          <FoodList foods={foods} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Wines</h2>
          <WineList wines={wines} />
        </div>
      </div>
    </div>
  );
}
