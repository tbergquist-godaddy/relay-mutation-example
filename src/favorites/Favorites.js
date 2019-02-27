// @flow strict

import * as React from 'react';
import { graphql } from 'react-relay';

import QueryRenderer from '../QueryRenderer';
import type { FavoritesSceneQueryResponse } from './__generated__/FavoritesSceneQuery.graphql';
import FavoritesList from './FavoritesList';

type Props = {||};

export default class Favorites extends React.Component<Props> {
  renderInner = (props: FavoritesSceneQueryResponse) => {
    return <FavoritesList data={props} />;
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query FavoritesQuery($first: Int, $options: SortOptions) {
            ...FavoritesList
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
