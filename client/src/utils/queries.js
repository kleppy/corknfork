import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

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
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      cellar {
        wine
        food
      }
    }
  }
`;