import React from 'react';
import Calendar from '../components/Calendar';
//import Item from '../components/Item';
import AuthenticatedHeader from '../components/AuthenticatedHeader';
import '../components/Header.css';
import ButtonContainer from '../components/ButtonContainer';
import './AuthenticatedView.css';

const AuthenticatedView = () => {
  return (
    <div className="authenticatedview">
      <AuthenticatedHeader />
      <div className="welcome-message">
        <h1>Welcome Bob!</h1>
      </div>
      <main>
        <Calendar />
        <ButtonContainer />
      </main>
    </div>
  );
};

export default AuthenticatedView;
