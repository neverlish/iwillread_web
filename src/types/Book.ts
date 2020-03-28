/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Book
// ====================================================

export interface Book_book_author {
  id: string;
  name: string;
}

export interface Book_book_hashtags {
  name: string;
}

export interface Book_book_userRegistered {
  name: string;
}

export interface Book_book_bookReads_user {
  name: string;
}

export interface Book_book_bookReads {
  rating: number;
  comment: string;
  user: Book_book_bookReads_user;
  dateCreated: any;
}

export interface Book_book_bookWants_user {
  name: string;
}

export interface Book_book_bookWants {
  user: Book_book_bookWants_user;
}

export interface Book_book {
  id: string;
  name: string;
  author: Book_book_author;
  datePublished: any;
  coverImage: string;
  hashtags: Book_book_hashtags[] | null;
  description: string;
  userRegistered: Book_book_userRegistered;
  bookReads: Book_book_bookReads[] | null;
  bookWants: Book_book_bookWants[] | null;
}

export interface Book {
  book: Book_book | null;
}

export interface BookVariables {
  id: string;
}
