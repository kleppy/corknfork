import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($userId: ID!){
    user(userId: $userId) {
      _id
      username
      email
      cellar {
        wine {
          _id
          name
          image
        }
        food{
          _id
          name
          image
        }
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

export const QUERY_WINE = gql`
  query wine($wineId: ID!) {
    wine(wineId: $wineId) {
      _id
      name
      image
      pairs
      flavors
    }
  }
`;

export const QUERY_FOOD = gql`
  query food($foodId: ID!) {
    food(foodId: $foodId) {
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
