// @flow

import { createEnvironment, createNetworkFetcher } from '@kiwicom/relay';

import token from './token';

const environment = createEnvironment({
  fetcherFn: createNetworkFetcher('https://tbergq-graphql.now.sh/graphql/', {
    Authorization: token,
    'X-Client': 'lolTest',
  }),
});

export default environment;
