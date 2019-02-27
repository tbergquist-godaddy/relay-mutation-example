/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TvShowItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SearchList$ref: FragmentReference;
export type SearchList = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: ?string,
      +$fragmentRefs: TvShowItem$ref,
    |}
  |}>,
  +$refType: SearchList$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SearchList",
  "type": "TvShowConnection",
  "metadata": null,
  "argumentDefinitions": [],
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
              "kind": "FragmentSpread",
              "name": "TvShowItem",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '69622ec995fcfc017131e34de5a48972';
module.exports = node;
