import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { UserProvider } from "./context/UserContext";
// Supports weights 100-700
import "@fontsource-variable/roboto-mono";
import "./sass/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
