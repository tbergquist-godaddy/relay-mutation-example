// @flow strict

import * as React from 'react';
import {
  createRefetchContainer,
  graphql,
  type RefetchRelayProp,
} from '@kiwicom/relay';
import Button from '@kiwicom/orbit-components/lib/Button';

import type { FavoritesList_data as FavoritesListType } from './__generated__/FavoritesList_data.graphql';
import FavoritesItem from './FavoritesItem';

type Props = {|
  +data: ?FavoritesListType,
  +relay: RefetchRelayProp,
|};

type State = {|
  isRefreshing: boolean,
|};

class FavoritesList extends React.Component<Props, State> {
  state = {
    isRefreshing: false,
  };

  onRefresh = () => {
    this.setState({ isRefreshing: true });
    this.props.relay.refetch(
      {
        options: {
          sortDirection: 'ASC',
          sortBy: 'NAME',
        },
      },
      null,
      () => {
        this.setState({ isRefreshing: false });
      },
      { force: true },
    );
  };

  render() {
    const data = this.props.data?.favorites?.edges ?? [];
    return (
      <div style={styles.container}>
        {data.map(item => (
          <FavoritesItem key={item?.node?.id} data={item?.node} />
        ))}
        {this.state.isRefreshing && 'loading....'}
        <Button onClick={this.onRefresh}>Refresh</Button>
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
  {
    data: graphql`
      fragment FavoritesList_data on RootQuery
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
              ...FavoritesItem_data
            }
          }
        }
      }
    `,
  },
  graphql`
    query FavoritesListRefetchQuery($first: Int, $options: SortOptions) {
      ...FavoritesList_data @arguments(first: $first, options: $options)
    }
  `,
);
