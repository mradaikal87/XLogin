import React, { useState } from "react";
import "./login.css";

export default function XLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
      setIsSuccess(true);
    } else {
      setMessage("Invalid username or password");
      setIsSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {!isSuccess && message && (
          <p className="error">{message}</p>
        )}

        <div
          style={{
            display: isSuccess ? "none" : "block",
          }}
        >
          <div className="fields">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </div>

        {/* Success message */}
        {isSuccess && <p className="success">Welcome, user!</p>}
      </form>
    </div>
  );
}
