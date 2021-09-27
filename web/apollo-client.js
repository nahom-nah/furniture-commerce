import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://localhost:9000/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

export default client;
