import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuth } from "./AuthService";

function Login() {
  const [email, setPassword] = useState("");
  const [password, setEmail] = useState("");
  const { user, login, logout } = useAuth();

  const handleAuth = async (event) => {
    event.preventDefault();

    if (user) {
      await logout(); // is a popup
      console.log("Logged out!");
    } else {
      await login();
      console.log("Logged in!");
    }
  };

  return (
    <div>
      {
        <form onSubmit={handleAuth}>
          <Button type="submit">{user ? "Log Out" : "Log In"}</Button>
        </form>
      }
    </div>
  );
}

export default Login;
