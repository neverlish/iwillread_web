import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

const link = createHttpLink({
  fetch,
  uri: process.env.NODE_ENV === 'production' ? 'https://iwlllread-server.neverlish.now.sh/graphql' : 'http://localhost:4000',
});

export default withApollo(
  ({ initialState }) => new ApolloClient({
    link,
    cache: new InMemoryCache().restore(initialState || {})
  })
);