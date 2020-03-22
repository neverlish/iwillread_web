import { ApolloProvider } from '@apollo/react-hooks';
import App from 'next/app';
import React from 'react';
import withApollo from '../util/apollo';

import 'antd/dist/antd.css';

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