import "../styles/globals.css";
import "@fortawesome/fontawesome-free";
import "mapbox-gl/dist/mapbox-gl.css";
import { ApolloProvider } from "@apollo/client";
import client from "./../apollo-client";
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
