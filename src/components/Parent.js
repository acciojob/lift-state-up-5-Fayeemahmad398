import { useState } from "react";
import React from "react";
import Child from "./Child";
const Parent = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [inputContent, setContent] = useState({});

  const handleLogin = () => {
    if (inputContent.username && inputContent.password) {
      setLoggedIn(true);
    }
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {!isLoggedIn ? (
        <div>
          <label htmlFor="">Username:</label>
          <input
            type="text"
            onChange={(event) => {
              setContent({ ...inputContent, username: event.target.value });
            }}
          />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            onChange={(event) => {
              setContent({
                ...inputContent,
                password: event.target.value,
              });
            }}
          />

          <button onClick={handleLogin}> login</button>
        </div>
      ) : (
        <Child islogin={isLoggedIn} />
      )}
    </div>
  );
};

export default Parent;
