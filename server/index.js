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
const redis = require("redis");
const session = require("express-session");
dotenv.config({ path: "./.env" });

require("./config/database");
let RedisStore = require("connect-redis")(session);
let redisClient = redis.createClient();

const startApolloServer = async (typeDefs, resolvers) => {
  const app = express();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      name: "qid",
      cookie: {
        sameSite: "lax",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24,
      },
      saveUninitialized: false,
      secret: process.env.SECRET,
      resave: false,
    })
  );
  app.use(morgan("dev"));

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({
      req,
      res,
    }),
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
