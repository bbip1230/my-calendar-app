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
