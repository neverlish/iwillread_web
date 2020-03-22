import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import { BOOK_FRAGMENT } from '../components/molecules/Book';
import BooksTemplate from '../components/templates/Books';
import Layout from '../components/templates/Layout';
import { Books, BooksVariables } from '../types/Books';

interface IndexPageProps {
  query?: string;
}

const BOOKS_QUERY = gql`
  query Books($query: String) {
    books(where: { OR: [{ name_contains: $query }, { hashtags_some: { name_contains: $query } }, { author: { name_contains: $query } }] } ) {
      ...BookFragment
    }
  }
  ${BOOK_FRAGMENT}
`;

const IndexPage = ({ query }: IndexPageProps) => {
  const { data, loading } = useQuery<Books, BooksVariables>(BOOKS_QUERY, { variables: { query } });
  return <Layout>
    <BooksTemplate loading={loading} books={data?.books!} />
  </Layout>
}

IndexPage.getInitialProps = ({ query }: any) => {
  return { ...query };
}

export default IndexPage;