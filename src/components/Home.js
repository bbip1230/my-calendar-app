import React from 'react';
import Header from './Header';
import Calendar from './Calendar';
import Login from './Login';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="welcome-message">
        <h1>Welcome to CalendarApp!</h1>
      </div>
      <main>
        <Calendar />
        <Login />
      </main>
    </div>
  );
};

export default Home;
