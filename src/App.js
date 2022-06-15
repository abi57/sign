import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Sign from "./Components/Sign/Sign";
import Logged from "./Components/Logged/Logged";
import Forget from "./Components/Forget/Forget";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Sign />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/logged" element={<Logged />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
