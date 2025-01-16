import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

import data from "./data.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route
          path="/detail"
          element={<Detail data={data.detail_projects} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail data={data.detail_projects} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
