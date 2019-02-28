// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/relay';

import type { SearchList_data as SearchResults } from './__generated__/SearchList_data.graphql';
import TvShowItem from './TvShowItem';

type Props = {|
  +data: ?SearchResults,
|};

class SearchList extends React.Component<Props> {
  render() {
    const data = this.props.data?.edges ?? [];
    return (
      <div>
        {data.map(tvShow => (
          <TvShowItem data={tvShow?.node} key={tvShow?.node?.id} />
        ))}
      </div>
    );
  }
}

export default createFragmentContainer(SearchList, {
  data: graphql`
    fragment SearchList_data on TvShowConnection {
      edges {
        node {
          id
          ...TvShowItem_data
        }
      }
    }
  `,
});
