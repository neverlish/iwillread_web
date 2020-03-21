import React from 'react';
import { BASE_URL } from '../util/apollo';

export default () => {
  return <a href={`${BASE_URL}/auth/google/login`}>button</a>
}