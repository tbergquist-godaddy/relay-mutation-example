// @flow strict

/* eslint-disable relay/unused-fields */

import * as React from 'react';
import {
  createRefetchContainer,
  graphql,
  type RelayRefetchProp,
} from '@kiwicom/relay';

import type { FavoritesList as FavoritesListType } from './__generated__/FavoritesList.graphql';
import FavoritesItem from './FavoritesItem';

type Props = {|
  +data: FavoritesListType,
  +relay: RelayRefetchProp,
|};

type State = {|
  isRefreshing: boolean,
|};

class FavoritesList extends React.Component<Props, State> {
  state = {
    isRefreshing: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isRefreshing) {
      this.setState({ isRefreshing: false });
    }
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true });
    this.props.relay.refetch(
      {
        options: this.props.options,
      },
      null,
      null,
      { force: true },
    );
  };

  render() {
    const data = this.props.data?.favorites?.edges ?? [];
    return (
      <div style={styles.container}>
        {data.map(item => (
          <FavoritesItem key={item.node.id} data={item.node} />
        ))}
        {this.state.isRefreshing && 'loading....'}
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  list: {
    paddingVertical: 10,
  },
};

export default createRefetchContainer(
  FavoritesList,
  graphql`
    fragment FavoritesList on RootQuery
      @argumentDefinitions(
        first: { type: "Int" }
        options: {
          type: "SortOptions"
          defaultValue: { sortDirection: "ASC", sortBy: "NAME" }
        }
      ) {
      favorites(first: $first, options: $options)
        @connection(key: "FavoritesList_favorites", filters: []) {
        edges {
          node {
            id
            ...FavoritesItem
          }
        }
      }
    }
  `,
  graphql`
    query FavoritesListRefetchQuery($first: Int, $options: SortOptions) {
      ...FavoritesList @arguments(first: $first, options: $options)
    }
  `,
);
