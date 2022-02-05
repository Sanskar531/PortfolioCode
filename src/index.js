import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "material-icons/iconfont/material-icons.css";

ReactDOM.render(
  <Router basename="/Portfolio">
    <App />
  </Router>,
  document.getElementById("root")
);
