import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./firebaseAuth/data.jsx";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./firebaseAuth/AuthService.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
