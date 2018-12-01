import * as React from 'react';

class CounterDisplay extends React.Component {
  constructor() {
    super();

    this.state = {count: 0};
  }

  componentDidMount() {
    const {counter} = this.props;

    counter.subscribe(() => {
      this.setState({count: counter.count});
    });
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

export default {
  id: 'example:counter-display',

  dependencies: {
    'example:counter': '^1.0'
  },

  create(env) {
    const counterV1 = env.featureServices['example:counter'];

    return {
      render: () => <CounterDisplay counter={counterV1} />
    };
  }
};
