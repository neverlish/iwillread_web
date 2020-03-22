import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import React from 'react';
import { BOOK_FRAGMENT } from '../../components/molecules/Book';
import Books from '../../components/templates/Books';
import Layout from '../../components/templates/Layout';
import { BooksByHashtag, BooksByHashtagVariables } from '../../types/BooksByHashtag';

const BOOKS_BY_HASHTAG_QUERY = gql`
  query BooksByHashtag($hashtag: String!) {
    books(where: { hashtags_some: { name: $hashtag } }) {
      ...BookFragment
    }
  }
  ${BOOK_FRAGMENT}
`

function Hashtag() {
  const { query: { hashtag } } = useRouter();

  if (!hashtag) {
    return <div></div>;
  }

  const { data, loading } = useQuery<BooksByHashtag, BooksByHashtagVariables>(BOOKS_BY_HASHTAG_QUERY, { variables: { hashtag: hashtag as string } });

  return <Layout>
    <Books loading={loading} books={data?.books!} />
  </Layout>
}

export default Hashtag;