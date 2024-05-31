const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    cellar: [Cellar]
  }

  type Food {
    _id: ID
    name: String!
    image: String
    pairs: [String]!
    flavors: [String]!
  }

  type Wine {
    _id: ID
    name: String
    image: String
    pairs: [String]!
    flavors: [String]!
  }

  type Cellar {
    _id: ID
    user: User
    food: Food
    wine: Wine
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    wines: [Wine]
    foods: [Food]
    wine(wineId: ID!): Wine
    food(foodId: ID!): Food
    user(username: String!): User
    cellars(username: String): [Cellar]
    cellar(cellarId: ID!): Cellar
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFood(
      name: String!
      image: String
      pairs: [String]!
      flavors: [String]!
    ): Food
    addWine(
      name: String!
      image: String
      pairs: [String]!
      flavors: [String]!
    ): Wine
    removeFood(foodId: ID!): Food
    removeWine(wineId: ID!): Wine
  }
`;

module.exports = typeDefs;
