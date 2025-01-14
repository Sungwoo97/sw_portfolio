import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import work from "./work.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home work={work} />} />
      </Routes>
    </Router>
  );
}

export default App;
