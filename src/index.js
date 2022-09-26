import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Outlet, Routes, Route } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
