import React from 'react';
import './index.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Person from "./components/Person"


function App() {
  return (
    <div className="App my-auto">
      <h1 className="text-3xl font-bold underline my-20 text-center">
        Psychometric Results
      </h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Person />} />
      </Routes>
    </div>
  );
}

export default App;
