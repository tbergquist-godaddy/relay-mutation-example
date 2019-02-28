// @flow strict

import * as React from 'react';
import { graphql } from 'react-relay';

import QueryRenderer from '../QueryRenderer';
import type { FavoritesQueryResponse } from './__generated__/FavoritesQuery.graphql';
import FavoritesList from './FavoritesList';

type Props = {||};

export default class Favorites extends React.Component<Props> {
  renderInner = (props: FavoritesQueryResponse) => {
    return <FavoritesList data={props} />;
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query FavoritesQuery($first: Int, $options: SortOptions) {
            ...FavoritesList_data
          }
        `}
        render={this.renderInner}
        variables={{
          options: {
            sortDirection: 'ASC',
            sortBy: 'NAME',
          },
        }}
      />
    );
  }
}
