
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Save from "./Component/Save.jsx"
import Layouts from "./Component/Layouts.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Layouts/>} />
        <Route path="/Save" element={<Save/>} />
      </Routes>
    </Router>
  );
}

export default App;
