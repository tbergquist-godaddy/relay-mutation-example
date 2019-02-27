// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/relay';

import type { TvShowItem as TvShowItemType } from './__generated__/TvShowItem.graphql';
import ToggleFavorite from '../favorites/mutation/ToggleFavorite';

type Props = {|
  +data: ?TvShowItemType,
|};
const TvShowItem = (props: Props) => {
  function onClick() {
    ToggleFavorite(
      {
        serieId: props.data?.id,
        add: !props.data?.isFavorite,
      },
      () => {
        console.log('ait');
      },
    );
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
export default createFragmentContainer(
  TvShowItem,
  graphql`
    fragment TvShowItem on TvShow {
      id
      name
      isFavorite
    }
  `,
);
