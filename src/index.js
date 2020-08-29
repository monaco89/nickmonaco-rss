import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from '@apollo/client';
import { onError } from '@apollo/link-error';
import { RetryLink } from '@apollo/link-retry';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import * as serviceWorker from './serviceWorker';

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'x-token': localStorage.getItem('rss_token'),
    },
  }));

  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      // TODO Log errors
      console.log('error', message);
    });
  }
  if (networkError) {
    // TODO Log errors
    // console.log('Network error', networkError);
  }
});

const link = ApolloLink.from([
  authLink,
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
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Auth0Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
