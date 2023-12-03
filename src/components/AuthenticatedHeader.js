/*
import React from 'react';
import './AuthenticatedHeader.css';
import { useNavigate } from 'react-router-dom';

export const AuthenticatedHeader = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo">CalendarApp</div>
      <nav className="navigation">
        <ul>
          <li>Home</li>
          <li>Calendar</li>
          <li>Info</li>
          <li>Tasks</li>
          <li>Settings</li>
        </ul>
        <button onClick={() => navigate('/')} className="log-out">
          Log Out
        </button>
      </nav>
    </header>
  );
};

export default AuthenticatedHeader;
*/

import React from 'react';
import './AuthenticatedHeader.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const AuthenticatedHeader = () => {
  const navigate = useNavigate();
  const isUserSignedIn = !!localStorage.getItem('token')

  const handleLogOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <header>
      <div className="logo">CalendarApp</div>
      <nav className="navigation">
        <ul>
          {isUserSignedIn ? (
            <>
              <li>
                <Link to="/authenticatedview">Home</Link>
              </li>
              <li>
                <Link to="/ViewItems">My Items</Link>
              </li>
              <li>
                <Link to="/additem">Add Item</Link>
              </li>
              <button onClick={handleLogOut} className="log-out">
                Log Out
              </button>
            </>
          ) : (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <button className="sign-in">Sign In</button>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default AuthenticatedHeader;
