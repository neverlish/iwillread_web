import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import React from 'react';
import { BOOK_FRAGMENT } from '../../components/molecules/Book';
import Books from '../../components/templates/Books';
import Layout from '../../components/templates/Layout';
import { BooksByAuthor, BooksByAuthorVariables } from '../../types/BooksByAuthor';

const BOOKS_BY_AUTHOR_QUERY = gql`
  query BooksByAuthor($author: String!) {
    books(where: { author: { name: $author } }) {
      ...BookFragment
    }
  }
  ${BOOK_FRAGMENT}
`

function Author() {
  const { query: { author } } = useRouter();

  if (!author) {
    return <div></div>;
  }

  const { data, loading } = useQuery<BooksByAuthor, BooksByAuthorVariables>(BOOKS_BY_AUTHOR_QUERY, { variables: { author: author as string } });

  return <Layout>
    <Books loading={loading} books={data?.books!} />
  </Layout>
}

export default Author;