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

// GraphQL query to fetch a list of wines with specific fields
export const QUERY_WINES = gql`
  query getWines {
    wines {
      _id
      name
      image
      pairs
      flavors
    }
  }
`;
