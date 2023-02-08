// In this example the component 2,3,4 don't need the user but they have to pass to the futher components down the state, so this is called prop drilling, we can avoid this by using the context hook
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PropDrillingProblem = () => {
  const [user, setUser] = useState("Shahmeer");
  return (
    <div>
      <h1>Hello {user}!</h1>
      <Component2 user={user} />
    </div>
  );
};

const Component2 = ({ user }) => {
  return (
    <>
      <h1> I am Component 2, I have user name but I dont need that</h1>
      <Component3 user={user} />
    </>
  );
};
const Component3 = ({ user }) => {
  return (
    <>
      <h1> I am Component 3, I have user name but I dont need that</h1>

      <Component4 user={user} />
    </>
  );
};
const Component4 = ({ user }) => {
  return (
    <>
      <h1> I am Component 4, I have user name but I dont need that</h1>

      <Component5 user={user} />
    </>
  );
};
const Component5 = ({ user }) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello {user} again</h1>
      <p>
        This example is done by passing user to each of the component till
        component 5, this is called prop drilling, click the following button to
        see the example by using useContext Hook to avoid prop drilling
      </p>
      <button
        onClick={() => {
          navigate("/useContext");
        }}
      >
        same example using useContext Hook
      </button>
    </>
  );
};
export default PropDrillingProblem;
