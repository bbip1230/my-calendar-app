import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import AuthenticatedView from './pages/AuthenticatedView';
import AddItem from './components/AddItem';
import ViewItems from './components/ViewItems';
import NotFound from './components/NotFound'

function App() {
  //const navigate = useNavigate();
  //isAuth variable is passed as props, must be modified by log in or sign up page
  var isAuth = false;
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound loggedIn={isAuth} />} />
        <Route path="/" element={<Home />} />
        <Route path="authenticatedview" element={<AuthenticatedView />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/viewitems" element={<ViewItems />} />
      </Routes>
    </Router>
  );
}

export default App;
