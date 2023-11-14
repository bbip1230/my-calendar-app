import React from 'react';
import './Header.css';

const Header = () => {
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
        <button className="sign-in">Sign In</button>
      </nav>
    </header>
  );
};

export default Header;

