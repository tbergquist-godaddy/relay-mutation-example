// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/relay';

import type { FavoritesItem_data as FavoritesType } from './__generated__/FavoritesItem_data.graphql';

type Props = {|
  +data: ?FavoritesType,
|};

const FavoritesItem = (props: Props) => {
  const nextEpisode = props.data?.nextEpisode ?? 'N/A';
  const previousEpisode = props.data?.previousEpisode ?? 'N/A';
  const name = props.data?.name ?? '';
  const status = props.data?.status ?? '';
  return (
    <div>
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
      name
      image {
        medium
      }
      previousEpisode
      nextEpisode
      status
    }
  `,
});
