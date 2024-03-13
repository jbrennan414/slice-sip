import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { LoginScreen } from "./components/LoginScreen";
import { HoleDisplay } from "./components/HoleDisplay";
import { CumulativeScore } from "./components/CumulativeScore";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/HoleDisplay" element={<HoleDisplay />} />
          <Route path="/CumulativeScore" element={<CumulativeScore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
