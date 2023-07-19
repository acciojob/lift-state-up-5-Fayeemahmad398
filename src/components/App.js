import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <form>
          <label htmlFor="Name">Username:</label>
          <input
            type="text"
            id="Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button onClick={() => setisLoggedIn(true)}>Login</button>
        </form>
      )}
    </div>
  );
};

export default App;
