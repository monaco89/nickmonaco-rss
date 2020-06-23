import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/link-error";
import { RetryLink } from "@apollo/link-retry";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log("GraphQL error", message);
    });
  }

  if (networkError) {
    console.log("Network error", networkError);
  }
});
console.log(process.env.REACT_APP_SERVER_URI);

const link = ApolloLink.from([
  new RetryLink(),
  errorLink,
  new HttpLink({
    uri: process.env.REACT_APP_SERVER_URI,
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
