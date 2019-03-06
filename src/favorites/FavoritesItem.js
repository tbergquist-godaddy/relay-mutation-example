// @flow strict

import * as React from 'react';
import {
  createFragmentContainer,
  graphql,
  commitLocalUpdate,
  type RelayProp,
} from '@kiwicom/relay';

import type { FavoritesItem_data as FavoritesType } from './__generated__/FavoritesItem_data.graphql';

type Props = {|
  +data: ?FavoritesType,
  +relay: RelayProp,
|};

const FavoritesItem = (props: Props) => {
  React.useEffect(() => {
    if (props.data?.isNew) {
      setTimeout(() => {
        commitLocalUpdate(props.relay.environment, store => {
          const tvShowId = props.data?.id;
          if (tvShowId == null) {
            throw Error('No tv show id was found.');
          }

          const favorite = store.get(tvShowId);
          if (favorite) {
            favorite.setValue(false, 'isNew');
          }
        });
      }, 3000);
    }
  });
  const nextEpisode = props.data?.nextEpisode ?? 'N/A';
  const previousEpisode = props.data?.previousEpisode ?? 'N/A';
  const name = props.data?.name ?? '';
  const status = props.data?.status ?? '';
  return (
    <div style={props.data?.isNew ? styles.justAdded : {}}>
      <div style={styles.container}>
        <img src={props.data?.image?.medium} alt={`${name} image`} />
        <div style={styles.content}>
          <div>{`${name} - ${status}`}</div>
          <div>{`Next episode: ${nextEpisode}`}</div>
          <div>{`Previous episode: ${previousEpisode}`}</div>
        </div>
      </div>
      <div style={styles.separator} />
    </div>
  );
};

const styles = {
  justAdded: {
    border: '5px dotted deeppink',
  },
  container: {
    marginBottom: 8,
    flexDirection: 'row',
  },
  imageWrapper: {
    backgroundColor: 'gray',
  },
  image: {
    height: 80,
    width: 80,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 8,
    marginStart: 85,
  },
  content: {
    marginStart: 10,
    alignSelf: 'center',
  },
};

export default createFragmentContainer(FavoritesItem, {
  data: graphql`
    fragment FavoritesItem_data on TvShow {
      id
      name
      image {
        medium
      }
      previousEpisode
      nextEpisode
      status
      isNew
    }
  `,
});
