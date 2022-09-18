import React from 'react';

const initState = {
  name: 'lgf',
  score: 0,
};

const UseStateDemo1 = () => {
  const [state, setState] = React.useState(initState);

  const increment = () => {
    setState((preState) => ({ ...preState, score: preState.score + 1 }));
  };

  const decrement = () => {
    setState((preState) => ({ ...preState, score: preState.score - 1 }));
  };

  return (
    <>
      <h3>{state.name}</h3>
      <button onClick={increment}>+</button>
      {state.score}
      <button onClick={decrement}>-</button>
    </>
  );
};

export default UseStateDemo1;
