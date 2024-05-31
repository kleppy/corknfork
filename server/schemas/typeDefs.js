const typeDefs = `
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
    wines: Wine
    foods: Food
    wine(wineId: ID!): Wine
    food(foodId: ID!): Food
    user(username: String!): User
    cellar(username: String): [Cellar]
    cellar(cellarId: ID!): Cellar
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFood(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;