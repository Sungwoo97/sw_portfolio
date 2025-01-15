import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import work from "./work.json";
import list from "./list.json";
import mini from "./mini.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home work={work} list={list} mini={mini} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
