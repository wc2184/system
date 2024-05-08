import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./firebase/Login";
import { useAuth } from "./firebase/AuthService";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useData } from "./firebase/data";

function App() {
  const [count, setCount] = useState(0);
  const { user, login, logout } = useAuth();

  //
  const { userData, createDoc, modifyDoc, fetchDoc, fetchDocs } = useData();
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const submitStuff = () => {
    console.log("Submitting");
    console.log(user.uid);
    // users/user.uid/tasks
    // createDoc("tasks", "dsdfj", {});

    // modifyDoc("tasks", "dsdfj", { nigd: "ddsf" });
    // fetchDoc("tasks", "dsdfj", console.log);
    fetchDocs(
      "users/HnLx4L258Yco1Rp8kDdmbbpqXiw1/qcghgfdcbhcxdfgjcghcgh",
      console.log
    );
  };
  //
  // if (user) {
  //   console.log(user.email);
  // }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Login />
      {user && user.email}
      {/*  */}
      <FormControl onSubmit={submitStuff}>
        <FormLabel>Stuff</FormLabel>
        <Input value={input} onChange={handleInputChange} />
        <Button mt={2} type="submit" onClick={submitStuff}>
          Submit
        </Button>
      </FormControl>
      {/*  */}
    </>
  );
}

export default App;
