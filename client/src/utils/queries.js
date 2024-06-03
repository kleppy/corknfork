import { gql } from "@apollo/client";

// GraphQL query to fetch a list of foods with specific fields
export const QUERY_FOODS = gql`
  query getFoods {
    foods {
      _id
      name
      image
      pairs
      flavors
    }
  }
`;
