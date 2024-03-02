import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Github from './components/Github';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/github" element={<Github />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
