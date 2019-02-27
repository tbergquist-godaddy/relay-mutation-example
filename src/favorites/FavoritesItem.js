// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/relay';

import type { FavoritesItem as FavoritesType } from './__generated__/FavoritesItem.graphql';

type Props = {|
  +data: FavoritesType,
|};

class FavoritesItem extends React.Component<Props> {
  render() {
    const nextEpisode = this.props.data.nextEpisode ?? 'N/A';
    const previousEpisode = this.props.data.previousEpisode ?? 'N/A';
    const name = this.props.data.name ?? '';
    const status = this.props.data.status ?? '';
    return (
      <div>
        <div style={styles.container}>
          <img src={this.props.data.image?.medium} alt={`${name} image`} />
          <div style={styles.content}>
            <div>{`${name} - ${status}`}</div>
            <div>{`Next episode: ${nextEpisode}`}</div>
            <div>{`Previous episode: ${previousEpisode}`}</div>
          </div>
        </div>
        <div style={styles.separator} />
      </div>
    );
  }
}

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

export default createFragmentContainer(
  FavoritesItem,
  graphql`
    fragment FavoritesItem on TvShow {
      id
      name
      image {
        medium
      }
      previousEpisode
      nextEpisode
      status
    }
  `,
);
