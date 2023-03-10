import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./components/routerSwitch";
import "./style/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouteSwitch></RouteSwitch>
  </React.StrictMode>
);
