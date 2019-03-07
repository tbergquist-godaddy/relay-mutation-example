// @flow

import * as React from 'react';
import {
  createEnvironment,
  createNetworkFetcher,
  QueryRenderer as OriginalQueryRenderer,
} from '@kiwicom/relay';

import token from './token';

type Props = {|
  +query: $FlowFixMe,
  +render: (props: Object) => React.Element<any>,
  +variables?: Object,
|};

const environment = createEnvironment({
  fetchFn: createNetworkFetcher('https://tbergq-graphql.now.sh/graphql/', {
    Authorization: token,
    'X-Client': 'relay-mutation-example',
  }),
});

export default class QueryRenderer extends React.Component<Props> {
  render() {
    return (
      <OriginalQueryRenderer
        environment={environment}
        query={this.props.query}
        variables={this.props.variables}
        onResponse={this.props.render}
      />
    );
  }
}
