import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const correctEmail = 'bob@gmail.com';
  const correctPassword = '1234';

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // You would handle the login logic here
    console.log('Login with:', email, password);
    if (email === correctEmail && password === correctPassword) {
      setIsLoggedIn(true);
      console.log('Login successful!');
      navigate('authenticatedview');
    } else {
      setIsLoggedIn(false);
      console.log('invalid usernmae or password');
    }
  };

  const navigate = useNavigate();

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-submit-button">
            Login now
          </button>
          <div className="alternative">
            <span>OR</span>
          </div>
          <button type="button" className="signup-button">
            Signup now
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
