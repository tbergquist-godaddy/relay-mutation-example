// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/relay';

import type { TvShowItem_data as TvShowItemType } from './__generated__/TvShowItem_data.graphql';
import ToggleFavorite from '../favorites/mutation/ToggleFavorite';

type Props = {|
  +data: ?TvShowItemType,
|};
const TvShowItem = (props: Props) => {
  function onClick() {
    ToggleFavorite({
      serieId: props.data?.id ?? '',
      add: !props.data?.isFavorite,
    });
  }
  return (
    <div
      style={{ padding: 10, borderBottom: '1px solid', cursor: 'pointer' }}
      onClick={onClick}
    >
      {props.data?.name}
    </div>
  );
};
export default createFragmentContainer(TvShowItem, {
  data: graphql`
    fragment TvShowItem_data on TvShow {
      id
      name
      isFavorite
    }
  `,
});
