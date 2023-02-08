import React, { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

// create the userContext that you want to use in other components
const UserContext = createContext();
const UseContextHook = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("Shahmeer");
  const handleSubmit = (event) => {
    event.preventDefault(alert(`Name Changed to ${user}`));
  };
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <UserContext.Provider value={user}>
        {/* provide the value to the UserContext by using the .Provider */}

        <h1>{`Hello ${user}!`}</h1>
        <Component2 />
      </UserContext.Provider>
    </>
  );
};

const Component2 = () => {
  return (
    <>
      <h1>Component 2 Now I dont have user</h1>
      <Component3 />
    </>
  );
};

const Component3 = () => {
  return (
    <>
      <h1> Component 3 I also don't have the user name now</h1>
      <Component4 />
    </>
  );
};

const Component4 = () => {
  return (
    <>
      <h1>Component 4 Now I don't have the user name</h1>
      <Component5 />
    </>
  );
};

const Component5 = () => {
  const user = useContext(UserContext);
  return <h1>{`Hello ${user} again`}</h1>;
};

export default UseContextHook;
