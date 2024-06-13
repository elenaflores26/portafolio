// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Tema1 from './pages/Tema1';
import Tema2 from './pages/Tema2';
import Tema3 from './pages/Tema3';
import Tema4 from './pages/Tema4';
import Tema5 from './pages/Tema5';
import Tema6 from './pages/Tema6';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tema1" element={<Tema1 />} />
        <Route path="/tema2" element={<Tema2 />} />
        <Route path="/tema3" element={<Tema3 />} />
        <Route path="/tema4" element={<Tema4 />} />
        <Route path="/tema5" element={<Tema5 />} />
        <Route path="/tema6" element={<Tema6 />} />
      </Routes>
    </Router>
  );
}

export default App;
