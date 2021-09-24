const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

dotenv.config({ path: "./.env" });

const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => console.log("hello"),
  },
};
const startApolloServer = async (typeDefs, resolvers) => {
  const app = express();
  app.use(cors());
  app.use(morgan("dev"));
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const port = process.env.PORT || 9001;
  app.listen(port, () => {
    console.log(`server is up and running on http://localhost:${port}`);
  });
};

startApolloServer(typeDefs, resolvers);
