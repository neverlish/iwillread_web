/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BookFragment
// ====================================================

export interface BookFragment_author {
  id: string;
  name: string;
}

export interface BookFragment_hashtags {
  name: string;
}

export interface BookFragment {
  id: string;
  name: string;
  author: BookFragment_author;
  datePublished: any;
  coverImage: string;
  hashtags: BookFragment_hashtags[] | null;
}
