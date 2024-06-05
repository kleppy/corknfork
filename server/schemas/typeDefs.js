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
    cellar(username: String): [Cellar]
    cellarById(cellarId: ID!): Cellar
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    logout: Auth
    login(email: String!, password: String!): Auth
    addFood(
      name: String!
      image: String
      pairs: [String]!
      flavors: [String]!
    ): Food
  }
`;

module.exports = typeDefs;
