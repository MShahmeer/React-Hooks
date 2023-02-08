import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Navigate to the following</h1>
      <button
        onClick={() => {
          navigate("/useEffect");
        }}
      >
        UseEffect Hook
      </button>
      <button
        onClick={() => {
          navigate("/PropDrilling");
        }}
      >
        PropDrilling
      </button>
    </>
  );
};

export default Home;
