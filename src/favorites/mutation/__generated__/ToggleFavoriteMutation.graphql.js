/**
 * @flow
 * @relayHash 296455000fd841ba4d5a638641c9a09f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FavoritesItem_data$ref = any;
export type ToggleFavoriteMutationVariables = {|
  serieId: string,
  add: boolean,
|};
export type ToggleFavoriteMutationResponse = {|
  +toggleFavorite: ?{|
    +success: ?boolean,
    +serieId: ?string,
    +tvShow: ?{|
      +node: ?{|
        +id: ?string,
        +$fragmentRefs: FavoritesItem_data$ref,
      |}
    |},
  |}
|};
export type ToggleFavoriteMutation = {|
  variables: ToggleFavoriteMutationVariables,
  response: ToggleFavoriteMutationResponse,
|};
*/


/*
mutation ToggleFavoriteMutation(
  $serieId: ID!
  $add: Boolean!
) {
  toggleFavorite(serieId: $serieId, add: $add) {
    success
    serieId
    tvShow {
      node {
        id
        ...FavoritesItem_data
      }
    }
  }
}

fragment FavoritesItem_data on TvShow {
  id
  name
  image {
    medium
    id
  }
  previousEpisode
  nextEpisode
  status
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "serieId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "add",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "add",
    "variableName": "add",
    "type": "Boolean!"
  },
  {
    "kind": "Variable",
    "name": "serieId",
    "variableName": "serieId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "success",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "serieId",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ToggleFavoriteMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "toggleFavorite",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ToggleFavorite",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tvShow",
            "storageKey": null,
            "args": null,
            "concreteType": "TvShowNode",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "TvShow",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "kind": "FragmentSpread",
                    "name": "FavoritesItem_data",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ToggleFavoriteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "toggleFavorite",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ToggleFavorite",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tvShow",
            "storageKey": null,
            "args": null,
            "concreteType": "TvShowNode",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "TvShow",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TvHelperImage",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "medium",
                        "args": null,
                        "storageKey": null
                      },
                      (v4/*: any*/)
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "previousEpisode",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "nextEpisode",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "status",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "ToggleFavoriteMutation",
    "id": null,
    "text": "mutation ToggleFavoriteMutation(\n  $serieId: ID!\n  $add: Boolean!\n) {\n  toggleFavorite(serieId: $serieId, add: $add) {\n    success\n    serieId\n    tvShow {\n      node {\n        id\n        ...FavoritesItem_data\n      }\n    }\n  }\n}\n\nfragment FavoritesItem_data on TvShow {\n  id\n  name\n  image {\n    medium\n    id\n  }\n  previousEpisode\n  nextEpisode\n  status\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '14aaa4a2b7911d4c2a06b4ae33e6b0ca';
module.exports = node;
