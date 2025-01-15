import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import data from "./data.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
