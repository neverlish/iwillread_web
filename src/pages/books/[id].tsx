import { useQuery } from '@apollo/react-hooks';
import { Col, Comment, Statistic, List, Row, Spin, Typography, Rate } from 'antd';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import React from 'react';
import { BOOK_FRAGMENT } from '../../components/molecules/Book';
import Layout from '../../components/templates/Layout';
import { Book, BookVariables } from '../../types/Book';
import { BookTwoTone } from '@ant-design/icons';


const BOOK_QUERY = gql`
  query Book($id: ID!) {
    book(where: { id: $id }) {
      ...BookFragment
      description
      userRegistered {
        name
      }
      bookReads {
        rating
        comment
        user {
          name
        }
        dateCreated
      }
      bookWants {
        user {
          name
        }
      }
    }
  }
  ${BOOK_FRAGMENT}
`;

function BookPage() {
  const { query: { id } } = useRouter();
  if (!id) {
    return <div></div>;
  }

  const { data, loading } = useQuery<Book, BookVariables>(BOOK_QUERY, { variables: { id: id as string } });

  if (loading) {
    return <Layout><Spin tip='Loading...' /></Layout>
  }

  if (!data || !data.book) {
    return <div></div>;
  }

  const { book } = data;

  const bookReadData = book.bookReads?.map((rd) => ({
    author: rd.user.name,
    content: rd.comment,
    rating: rd.rating,
    datetime: rd.dateCreated
  }))

  return <Layout>
    <Row>
      <Col span={6}>
        <Typography.Title>{book.name}</Typography.Title>
      </Col>
      <Col span={6}>
        <Statistic title='Wanted' value={book.bookWants?.length} prefix={<BookTwoTone />} />
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <img src={book.coverImage} width={100} />
        <p>{book.description}</p>
      </Col>
      <Col span={12}>
        <List
          itemLayout='horizontal'
          dataSource={bookReadData}
          renderItem={item => (
            <li>
              <Rate defaultValue={item.rating} allowHalf disabled />
              <Comment
                author={item.author}
                content={item.content}
                datetime={item.datetime}
              />
            </li>
          )}
        />
      </Col>
    </Row>
  </Layout>
}

export default BookPage;