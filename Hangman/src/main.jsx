import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./routes/routes";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
);
