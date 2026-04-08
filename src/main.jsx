import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./index.jsx"; // your portfolio component
import "./index.css"; // Tailwind or custom styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);