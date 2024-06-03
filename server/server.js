// Import necessary modules
const express = require("express"); // Express framework for creating web servers
const { ApolloServer } = require("apollo-server-express"); // Apollo Server for GraphQL
const mongoose = require("mongoose"); // Mongoose for MongoDB object modeling
const { typeDefs, resolvers } = require("./schemas/index"); // Import GraphQL type definitions and resolvers
require("dotenv").config(); // Load environment variables

// Function to start the server
const startServer = async () => {
  const app = express(); // Create an Express application

  // Create an Apollo Server instance with the type definitions and resolvers
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      // Context function can be used to pass context to resolvers (e.g., authentication)
    },
  });

  // Start the Apollo Server before applying middleware
  await server.start();

  // Apply Apollo Server middleware to the Express application
  server.applyMiddleware({ app });

  // Connect to the MongoDB database using Mongoose
  await mongoose.connect(process.env.CORKNFORK_DB, {
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
  });

  // Start the Express server on port 3001
  app.listen(
    { port: 3001 },
    () =>
      console.log(`Server ready at http://localhost:3001${server.graphqlPath}`) // Log the server URL with the GraphQL endpoint
  );
};

// Call the function to start the server
startServer();
