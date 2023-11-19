import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddItem from './components/AddItem'; // Add item view
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AddItem />} />
      </Routes>
    </Router>
  );
}

export default App;


