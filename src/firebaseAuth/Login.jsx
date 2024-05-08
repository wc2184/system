import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthService";
import { useData } from "./data";

function Login() {
  const [email, setPassword] = useState("");
  const [password, setEmail] = useState("");
  const { user, login, logout } = useAuth();
  const { userData, createDoc, modifyDoc, fetchDoc } = useData();

  useEffect(() => {
    console.log(user, "THIS IS USER");
    if (!user) return;
    let userDoc = fetchDoc("users", user.uid, console.log);
    if (!userDoc) {
      createDoc("users", user.uid, {});
    }
  }, [user]);

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
