import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseEffectHook = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // remove [] for rendering again and again

  useEffect(() => {
    setTimeout(() => {
      setSecondCount((secondCount) => secondCount + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <h1> I am rendering on every render for {count} times</h1>
      <h1> I am rendering on first render for {secondCount} time</h1>
      <button
        onClick={() => {
          navigate("/useEffect/Example");
        }}
      >
        Check Example
      </button>
    </div>
  );
};

export default UseEffectHook;
