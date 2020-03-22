/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Books
// ====================================================

export interface Books_books_author {
  id: string;
  name: string;
}

export interface Books_books_hashtags {
  name: string;
}

export interface Books_books {
  id: string;
  name: string;
  author: Books_books_author;
  datePublished: any;
  coverImage: string;
  hashtags: Books_books_hashtags[] | null;
}

export interface Books {
  books: (Books_books | null)[];
}

export interface BooksVariables {
  query?: string | null;
}
