import { useQuery } from '@apollo/react-hooks';
import { Button, Input, Layout, Spin } from 'antd';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BASE_URL } from '../../util/apollo';

const { Header, Content, Footer } = Layout;

const ME_QUERY = gql`
  query Me {
    me {
      email
    }
  }
`

export default ({ children }: { children: JSX.Element | (JSX.Element | string | undefined | null)[] | string | undefined }) => {
  const { data, loading } = useQuery(ME_QUERY);
  const [query, setQuery] = useState('');
  const router = useRouter();

  return <Layout>
    <Header>
      <Input.Search
        value={query}
        onInput={(e) => setQuery((e.target as any).value)}
        style={{ width: '130px' }}
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            router.push(query ? `/index?query=${query}` : '/');
          }
        }}
        onSearch={() => router.push(query ? `/index?query=${query}` : '/')}
      />
      <div style={{ float: 'right' }}>
        {loading ?
          <Spin />
          : data && data.me
            ? <Button>{data.me.email}</Button>
            : <Button type='primary'><a href={`${BASE_URL}/auth/google/login`}>login</a></Button>
        }
      </div>
    </Header>
    <Content style={{ padding: '30px' }}>
      {children}
    </Content>
    <Footer>
      2020 iwillread
    </Footer>
  </Layout>
}