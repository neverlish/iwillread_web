import { useQuery } from '@apollo/react-hooks';
import { Breadcrumb, Button, Layout } from 'antd';
import gql from 'graphql-tag';
import React from 'react';
import { BASE_URL } from '../../util/apollo';

const { Header, Content, Footer } = Layout;

const ME_QUERY = gql`
  query {
    me {
      email
    }
  }
`

export default ({ children }: { children: JSX.Element | string }) => {
  const { data } = useQuery(ME_QUERY);

  return <Layout>
    <Header>
      <div style={{ float: 'right' }}>
        {data && data.me
          ? <Button>{data.me.email}</Button>
          : <Button type='primary'><a href={`${BASE_URL}/auth/google/login`}>login</a></Button>
        }
      </div>
    </Header>
    <Content style={{ padding: '30px' }}>
      <div style={{ backgroundColor: '#fff', padding: '24px', minHeight: '280px' }}>
        {children}
      </div>
    </Content>
    <Footer>
      2020 iwillread
    </Footer>
  </Layout>
}