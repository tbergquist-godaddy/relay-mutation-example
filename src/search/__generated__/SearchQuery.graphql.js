/**
 * @flow
 * @relayHash e8794955da9e41377016282d38bf72c0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SearchList_data$ref = any;
export type SearchQueryVariables = {|
  query: string
|};
export type SearchQueryResponse = {|
  +searchTvShow: ?{|
    +$fragmentRefs: SearchList_data$ref
  |}
|};
export type SearchQuery = {|
  variables: SearchQueryVariables,
  response: SearchQueryResponse,
|};
*/


/*
query SearchQuery(
  $query: String!
) {
  searchTvShow(query: $query) {
    ...SearchList_data
  }
}

fragment SearchList_data on TvShowConnection {
  edges {
    node {
      id
      ...TvShowItem_data
    }
  }
}

fragment TvShowItem_data on TvShow {
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query",
    "type": "String!"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SearchQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "searchTvShow",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TvShowConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "SearchList_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "searchTvShow",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TvShowConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "TvShowEdge",
            "plural": true,
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
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
    "operationKind": "query",
    "name": "SearchQuery",
    "id": null,
    "text": "query SearchQuery(\n  $query: String!\n) {\n  searchTvShow(query: $query) {\n    ...SearchList_data\n  }\n}\n\nfragment SearchList_data on TvShowConnection {\n  edges {\n    node {\n      id\n      ...TvShowItem_data\n    }\n  }\n}\n\nfragment TvShowItem_data on TvShow {\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e57ea29e47ee447306687cdba0c5e7dd';
module.exports = node;
