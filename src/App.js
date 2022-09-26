import React from "react";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import { BrowserRouter, Link, Outlet, Routes, Route } from "react-router-dom";

import style from "../src/style.scss";

import Home from "../src/routes/Home";

import Teams from "./routes/teams/Teams";
import Team from "./routes/teams/Team";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Teams />}>
          <Route path=':teamId' element={<Team />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
