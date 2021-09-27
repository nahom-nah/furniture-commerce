const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

dotenv.config({ path: "./.env" });

require("./config/database");
const startApolloServer = async (typeDefs, resolvers) => {
  const app = express();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(morgan("dev"));

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    // context: ({ req, res }) => {
    //   req, res;
    // },
    // plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const port = process.env.PORT || 9001;
  app.listen(port, () => {
    console.log(`server is up and running on http://localhost:${port}`);
  });
};

startApolloServer(typeDefs, resolvers);
