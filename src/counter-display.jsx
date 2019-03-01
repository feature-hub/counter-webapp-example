import * as React from 'react';
import useCounter from './use-counter';

function CounterDisplay({counter}) {
  const {count, updaterId} = useCounter(counter);

  return (
    <div>
      <div>{count}</div>
      {updaterId ? <div>Last Update by: {updaterId}</div> : null}
    </div>
  );
}

export default {
  id: 'example:counter-display',

  dependencies: {
    'example:counter': '^1.0'
  },

  create(env) {
    const counter = env.featureServices['example:counter'];

    return {
      render: () => <CounterDisplay counter={counter} />
    };
  }
};
