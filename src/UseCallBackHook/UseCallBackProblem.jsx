import React, { useState, useReducer, useCallback } from "react";
import Todos from "./Todos";
const initialState = [];

const reducer = (state, action) => {
  if (action.type === "New_Entry") {
    return [...state, `New Entry`];
  }
  return state;
};

const UseCallBackProblem = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = () => {
    dispatch({ type: "New_Entry" });
  };
  return (
    <>
      <Todos todos={state} addTodo={addTodo} />
      {/* now when we click the + icon to increment the counter the Todos component is rerendering as Todos is the child of this component, but rerendering is unnecessary here so we have to memoize this function by using the useCallback hook */}
      <hr />
      Count: {count}
      <button onClick={increment}> + </button>
    </>
  );
};

export default UseCallBackProblem;
