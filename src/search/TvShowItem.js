// @flow

import * as React from 'react';
import {
  createFragmentContainer,
  graphql,
  type RelayProp,
  commitLocalUpdate,
} from '@kiwicom/relay';

import type { TvShowItem_data as TvShowItemType } from './__generated__/TvShowItem_data.graphql';
import ToggleFavorite from '../favorites/mutation/ToggleFavorite';

type Props = {|
  +data: ?TvShowItemType,
  +relay: RelayProp,
|};
const TvShowItem = (props: Props) => {
  function onClick() {
    ToggleFavorite(
      props.relay.environment,
      {
        serieId: props.data?.id ?? '',
        add: !props.data?.isFavorite,
      },
      () => {
        commitLocalUpdate(props.relay.environment, store => {
          const tvShowId = props.data?.id;
          if (tvShowId == null) {
            throw Error('No tv show id was found.');
          }

          const show = store.get(tvShowId);
          if (show) {
            show.setValue(!props.data?.isFavorite, 'isNew');
          }
        });
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
export default createFragmentContainer(TvShowItem, {
  data: graphql`
    fragment TvShowItem_data on TvShow {
      id
      name
      isFavorite
    }
  `,
});
