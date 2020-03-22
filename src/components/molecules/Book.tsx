import { Card } from 'antd';
import { format } from 'date-fns';
import React from 'react';
import { Books_books } from '../../types/Books';
import Link from 'next/link';
import gql from 'graphql-tag';

export const BOOK_FRAGMENT = gql`
  fragment BookFragment on Book {
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
`

const Book = ({ book }: { book: Books_books }) => {
  return (
    <Card title={book.name} style={{ width: '300px' }}>
      <p>
        <Link href={`/author/${book.author.name}`}><a>{book.author.name}</a></Link> | {format(new Date(book.datePublished), 'yyyy.MM.dd.')}
      </p>
      <img src={book.coverImage} height={150} />
      <div>
        {book.hashtags?.map((hashtag) => <Link href={`/tag/${hashtag.name}`} key={hashtag.name}><a>#{hashtag.name}</a></Link>)}
      </div>
    </Card>
  )
};

export default Book;