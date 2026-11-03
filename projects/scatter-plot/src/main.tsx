// Standalone bootstrap so the project can be developed without the shell.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./standalone.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App basePath="/" theme="light" />
  </StrictMode>,
);
