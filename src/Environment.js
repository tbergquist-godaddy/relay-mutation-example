// @flow

import { createEnvironment, createNetworkFetcher } from '@kiwicom/relay';

import token from './token';

const environment = createEnvironment({
  fetcherFn: createNetworkFetcher('https://tbergq-graphql.now.sh/graphql/', {
    Authorization: token,
    'X-Client': 'relay-mutation-example',
  }),
});

export default environment;
