import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseEffectExample1 = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <p>
        The calculation is based on the count value, as soon as the count
        changes useEffect Hook renders the component again and values are
        updated, useEffect has the dependency of count array
      </p>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        +
      </button>
      <p>Calculation: {calculation}</p>
    </div>
  );
};

export default UseEffectExample1;
