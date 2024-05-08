import React, { useState } from "react";
import { signIn } from "./AuthService";

function Login() {
  const [email, setPassword] = useState("");
  const [password, setEmail] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signIn(email, password);
      console.log("Logged in successfully!");
    } catch (error) {
      console.error("Authentication failed!", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
