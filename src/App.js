import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import AuthenticatedView from './pages/AuthenticatedView';
import AddItem from './components/AddItem';
function App() {
  //const navigate = useNavigate();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="authenticatedview" element={<AuthenticatedView />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </Router>
  );
}

export default App;
