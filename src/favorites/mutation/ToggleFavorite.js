// @flow

import { graphql, commitMutation } from 'react-relay';

import Environment from '../../Environment';
import type { ToggleFavoriteMutationVariables } from './__generated__/ToggleFavoriteMutation.graphql';

const mutation = graphql`
  mutation ToggleFavoriteMutation($serieId: ID!, $add: Boolean!) {
    toggleFavorite(serieId: $serieId, add: $add) {
      success
      serieId
      tvShow {
        node {
          id
          ...FavoritesItem
        }
      }
    }
  }
`;

const parentID = 'client:root';
const connectionKey = 'FavoritesList_favorites';
const configs = [
  {
    type: 'RANGE_ADD',
    parentID,
    connectionInfo: [
      {
        key: connectionKey,
        rangeBehavior: 'append',
      },
    ],
    edgeName: 'tvShow',
  },
  {
    type: 'RANGE_DELETE',
    parentID,
    connectionKeys: [
      {
        key: connectionKey,
      },
    ],
    pathToConnection: [parentID, 'favorites'],
    deletedIDFieldName: 'serieId',
  },
];

const toggle = (
  { serieId, add }: ToggleFavoriteMutationVariables,
  onCompleted: ?() => void,
) => {
  commitMutation(Environment, {
    mutation,
    variables: { serieId, add },
    onCompleted,
    onError: () => alert('Toggle favorite failed'),
    configs,
    updater: store => {
      const serie = store.get(serieId);
      serie.setValue(add, 'isFavorite');
    },
  });
};

export default toggle;
