import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import Book from '../components/molecules/Book';
import Layout from '../components/templates/Layout';
import { Books, BooksVariables } from './__generated__/Books';

interface IndexPageProps {
  query?: string;
}

const BOOKS_QUERY = gql`
  query Books($query: String) {
    books(where: { OR: [{ name_contains: $query }, { hashtags_some: { name_contains: $query } }, { author: { name_contains: $query } }] } ) {
      id
      name
      author {
        id
        name
      }
      datePublished
      coverImage
      hashtags {
        name
      }
    }
  }
`;

const IndexPage = ({ query }: IndexPageProps) => {
  const { data } = useQuery<Books, BooksVariables>(BOOKS_QUERY, { variables: { query } });

  return <Layout>
    {data?.books.map((book) =>
      book && <Book book={book} key={book.id} />
    )}
  </Layout>
}

IndexPage.getInitialProps = ({ query }: any) => {
  return { ...query };
}

export default IndexPage;