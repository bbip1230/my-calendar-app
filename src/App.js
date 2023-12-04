import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import AuthenticatedView from './pages/AuthenticatedView';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import ViewItems from './components/ViewItems';
import NotFound from './components/NotFound';
//import SignupPage from './pages/SignupPage';

function App() {
  const isAuth = false;
  //const isUserSignedIn = !!localStorage.getItem('token');

  // Placeholder item object for editing
  const itemToEdit = {
    itemName: 'Example Item to Edit',
    itemDescription: 'Example Description to Edit',
    selectedDate: new Date(),
  };

  // Placeholder submit function for editing
  const onEditSubmit = (editedItem) => {
    console.log('Submit edited item:', editedItem);
  };

  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound loggedIn={isAuth} />} />
        <Route path="/" element={<Home />} />
        <Route path="authenticatedview" element={<AuthenticatedView />} />
        <Route path="/additem" element={<AddItem />} />
        {/* Pass the itemToEdit object and onEditSubmit function to the EditItem component */}
        <Route
          path="/edititems"
          element={<EditItem itemToEdit={itemToEdit} onEditSubmit={onEditSubmit} />}
        />
        <Route path="/viewitems" element={<ViewItems />} />
      </Routes>
    </Router>
  );
}

export default App;
