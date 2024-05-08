import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DataProvider } from "./firebase/data.jsx";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./firebase/AuthService.jsx";
import { RouterProvider } from "react-router-dom";
import { theme } from "./mainCSS.jsx";
import { router } from "./mainRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <DataProvider>
          <RouterProvider router={router} />
        </DataProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
