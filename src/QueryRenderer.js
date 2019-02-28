// @flow

import * as React from 'react';
import { QueryRenderer as OriginalQueryRenderer } from '@kiwicom/relay';
import type { GraphQLTaggedNode } from 'react-relay';

import environment from './Environment';

type Props = {|
  +query: GraphQLTaggedNode,
  +render: (props: Object) => React.Element<any>,
  +variables?: Object,
|};

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
