import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import App from 'next/app';
import React, { ReactNode } from 'react';
import withApollo from '../util/apollo';


class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props as any;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);