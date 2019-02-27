// @flow

import * as React from 'react';
import Heading from '@kiwicom/orbit-components/lib/Heading';

import Favorites from '../src/favorites/Favorites';
import SearchForm from '../src/search/SearchForm';

export default function Index() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <Heading>Favorites</Heading>
        <Favorites />
      </div>
      <div style={{ flex: 1 }}>
        <Heading>Search</Heading>
        <SearchForm />
      </div>
    </div>
  );
}
