import { Spin } from 'antd';
import React from 'react';
import { Books_books } from '../../types/Books';
import Book from '../molecules/Book';

function Books({ books, loading }: { loading: boolean, books: (Books_books | null)[] }) {
  return <>
    {loading
      ? <Spin tip='Loading...' />
      : books.map((book) =>
        book && <Book book={book} key={book.id} />
      )}
  </>
}

export default Books;