/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BooksByHashtag
// ====================================================

export interface BooksByHashtag_books_author {
  id: string;
  name: string;
}

export interface BooksByHashtag_books_hashtags {
  name: string;
}

export interface BooksByHashtag_books {
  id: string;
  name: string;
  author: BooksByHashtag_books_author;
  datePublished: any;
  coverImage: string;
  hashtags: BooksByHashtag_books_hashtags[] | null;
}

export interface BooksByHashtag {
  books: (BooksByHashtag_books | null)[];
}

export interface BooksByHashtagVariables {
  hashtag: string;
}
