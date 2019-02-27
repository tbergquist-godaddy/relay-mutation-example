// @flow

import * as React from 'react';
import { QueryRenderer as OriginalQueryRenderer } from '@kiwicom/relay';

import environment from './Environment';

type Props = {|
  +query: string,
  +render: (props: Object) => React.Element<any>,
  +variables?: Object,
|};

export default class QueryRenderer extends React.Component<Props> {
  renderInner = ({ error, props }: Object) => {
    if (error) {
      console.warn(error); // eslint-disable-line no-console
      return <div>Query failed </div>;
    }

    if (props) {
      return this.props.render(props);
    }

    return <div>loading...</div>;
  };

  render() {
    return (
      <OriginalQueryRenderer
        environment={environment}
        query={this.props.query}
        variables={this.props.variables}
        render={this.renderInner}
      />
    );
  }
}
