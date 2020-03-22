/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BooksByAuthor
// ====================================================

export interface BooksByAuthor_books_author {
  id: string;
  name: string;
}

export interface BooksByAuthor_books_hashtags {
  name: string;
}

export interface BooksByAuthor_books {
  id: string;
  name: string;
  author: BooksByAuthor_books_author;
  datePublished: any;
  coverImage: string;
  hashtags: BooksByAuthor_books_hashtags[] | null;
}

export interface BooksByAuthor {
  books: (BooksByAuthor_books | null)[];
}

export interface BooksByAuthorVariables {
  author: string;
}
