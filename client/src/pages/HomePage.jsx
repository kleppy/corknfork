// Imports React and Apollo functions.
import React from "react";
import { useQuery, gql } from "@apollo/client";

// Imports the custom files.
import pear from "/pear.svg";
import FoodList from "../components/FoodList";
import WineList from "../components/WineList";
import { QUERY_FOODS } from "../utils/queries";
import { QUERY_WINES } from "../utils/queries";

//TODO: Make it so each pear icon links to another page or a modal with paired opposites of it's associated list item.
//TODO: Make it so a pear icon appears next to each dynamically added food.

export default function HomePage() {
  const { loading, data } = useQuery(QUERY_FOODS, QUERY_WINES);
  const foods = data?.foods || [];
  const wines = data?.wines || [];

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <h2>Foods</h2>
        <FoodList />
      </div>
      <div>
        <h2>Wines</h2>
        <WineList />
      </div>
    </div>
  );
}
