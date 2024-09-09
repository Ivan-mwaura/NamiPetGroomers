// LoginSignUp.js
import React, { useState } from 'react';
import './LoginSignUp.scss';

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (

  <div className='form-hero'>

    <div className="form-container">
      <div className="tabs">
        <button className={`tab ${isSignUp ? 'active' : ''}`} onClick={() => setIsSignUp(true)}>Sign Up</button>
        <button className={`tab ${!isSignUp ? 'active' : ''}`} onClick={() => setIsSignUp(false)}>Log In</button>
      </div>
      {isSignUp ? (
        <form className="form">
          <h2>Sign Up for Free</h2>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Set A Password" required />
          <button type="submit">Get Started</button>
        </form>
      ) : (
        <form className="form">
          <h2>Login</h2>
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <div className="login-options">
            <label>
              <input type="radio" name="loginType" value="user" defaultChecked /> User
            </label>
            <label>
              <input type="radio" name="loginType" value="admin" /> Admin
            </label>
          </div>
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
    </div>
  );
};



export default LoginSignUp;
