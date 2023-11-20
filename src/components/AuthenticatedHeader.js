import React from 'react';
import './AuthenticatedHeader.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const AuthenticatedHeader = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo">CalendarApp</div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/authenticatedview">Home</Link>
          </li>
          <li>
            <Link to="/ViewItems">My Items</Link>
          </li>
          <li>
            <Link to="/additem">Add Item</Link>
          </li>
        </ul>
        <button onClick={() => navigate('/')} className="log-out">
          Log Out
        </button>
      </nav>
    </header>
  );
};

export default AuthenticatedHeader;
