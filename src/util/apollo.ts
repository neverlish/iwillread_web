import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';

export const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://iwlllread-server.neverlish.now.sh'
  : 'http://localhost:4000';

const httpLink = createHttpLink({
  fetch,
  uri: `${BASE_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('user');

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token || ''}`
    },
  };
})

export default withApollo(
  ({ initialState }) => new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {})
  })
);