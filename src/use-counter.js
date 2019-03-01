import * as React from 'react';

const {useEffect, useState} = React;

export default function useCounter(counter) {
  const [countState, setCountState] = useState({
    count: counter.count,
    updaterId: undefined
  });

  useEffect(
    () =>
      counter.subscribe(updaterId =>
        setCountState({count: counter.count, updaterId})
      ),
    [counter]
  );

  return countState;
}
