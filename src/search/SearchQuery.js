// @flow

import * as React from 'react';
import { graphql } from '@kiwicom/relay';

import QueryRenderer from '../QueryRenderer';
import SearchList from './SearchList';
import type { SearchQueryResponse } from './__generated__/SearchQuery.graphql';

type Props = {|
  +query: string,
|};

function renderInner(props: SearchQueryResponse) {
  return <SearchList data={props.searchTvShow} />;
}

export default function SearchQuery({ query }: Props) {
  return (
    <QueryRenderer
      query={graphql`
        query SearchQuery($query: String!) {
          searchTvShow(query: $query) {
            ...SearchList_data
          }
        }
      `}
      variables={{ query }}
      render={renderInner}
    />
  );
}
