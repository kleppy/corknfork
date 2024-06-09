const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const stripe = require("stripe")(
  "pk_test_51POU8YBZUx6pYDq4bZy2Tbk4Haxp9hOsF23jySQHCyurt3dKA9trx6rLa6Lou0SYy4ritge7REkb2hfRWJF3P5BT005vWsNnJs"
); //Replace with .env variable.

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  // app.use(express.static(path.join(__dirname, "../client"))); //! Recommended by ChatGPT
  //! Added by Jon as replacement for line above that may allow .jsx files to be served.
  app.use(
    express.static(path.join(__dirname, "../client"), {
      setHeaders: (res, path, stat) => {
        if (path.endsWith(".jsx")) {
          res.set("Content-Type", "application/javascript");
        }
      },
    })
  );

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );

  //! Recommended by ChatGPT
  // Catch-all route to serve index.html from 'client' for any unknown routes (for client-side routing)
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "index.html"));
  });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
