// this useReducer hook is very similar to the useState hook but where we have to handle large application state we use the useReducer hook
import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  //takes an action and state and returns the new state
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // the useReducer hook takes the two arguments one is the reducer function and the other is the initial state

  //The Reducer function is the pure function that means this will output same value on the same parameters

  //This function doesnot have any side effects

  //just like the const [count, setCount] in useState, here we have the const [state, dispatch] where dispatch is called when action is triggered, and state is the actual state to be accessed in the DOM.
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
    </div>
  );
};

export default UseReducer;
