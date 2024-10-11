import React, { useEffect, useState } from 'react';
import './LoginSignUp.scss';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggles between Sign Up and Log In
  const [accountCreated, setAccountCreated] = useState(false); // Tracks account creation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user', // Default role
  });

  useEffect(() => {
    if (localStorage.getItem('UserToken')) {

      window.location.href = '/'; // Redirect to home page

    } else if (localStorage.getItem('AdminToken')) {

      window.location.href = '/admin'; // Redirect to admin page

    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (e) => {
    setFormData({
      ...formData,
      role: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let endpoint = isSignUp ? 'http://localhost:5003/api/v1/signUp' : 'http://localhost:5003/api/v1/login';
      if (formData.role === 'admin') {
        endpoint = 'http://localhost:5003/api/v1/adminLogin'; // Send to /admin/signUp or /admin/login
      }

      const data = {
        email: formData.email,
        password: formData.password,
      };

      if (isSignUp) {
        data.firstName = formData.firstName;
        data.lastName = formData.lastName;
        data.role = formData.role;
      }

      const response = await axios.post(endpoint, data);

      console.log('Response Data:', response.data); 
      
      // Handle successful sign-up
      if (response.data.msg === "Account created successfully") {
        toast.success("Account created successfully. Please log in.");
        // Set account created to true and switch to login form
        setAccountCreated(true);
        setIsSignUp(false);
      }

      // Handle successful login
      if (response.data.msg === "Login successful") {
        console.log('Token received:', response.data); // Debugging to verify token

        if (response.data.AdminToken) {
          toast.success("Admin Login successful");
          console.log('Admin Token detected, redirecting to /admin'); // Debugging to verify redirection
          localStorage.setItem('AdminToken', response.data.AdminToken);
          
          setTimeout(() => {
            window.location.href = '/admin/'; // Redirect to home page
          }, 1000);  // Redirect to admin page
          
        } else if (response.data.token) {
          toast.success("Login successful");
          console.log('User Token detected, redirecting to /'); // Debugging to verify redirection
          localStorage.setItem('UserToken', response.data.token);
          localStorage.setItem('UserEmail', response.data.user.email);

          setTimeout(() => {
            window.location.href = '/'; // Redirect to home page
          }, 1000); 
          
        } else {
          console.error('No token found, check backend response'); // Handle no token found


        }
      } else {
        
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.error('Error during login:', error); // Handle error as needed
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className='login-signup-container'>
      <div className='login-signup-inner'>
        <div className='login-signup-left'>
          <div className="form-container">
            <div className="tabs">
              <button className={`tab ${isSignUp ? 'active' : ''}`} onClick={() => setIsSignUp(true)}>Sign Up</button>
              <button className={`tab ${!isSignUp ? 'active' : ''}`} onClick={() => setIsSignUp(false)}>Log In</button>
            </div>
  
            {accountCreated && !isSignUp && (
              <div className="account-created-message">
                <p>Your account has been created. Please log in with your new credentials.</p>
              </div>
            )}
  
            <form className="form" onSubmit={handleSubmit}>
              {isSignUp ? (
                <>
                  <h2>Sign Up to InsideBox</h2>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </>
              ) : (
                <>
                  <h2>Login</h2>
                </>
              )}
  
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
  
              {!isSignUp && (
                <div className="login-options">
                  <label>
                    <input
                      type="radio"
                      name="role"
                      value="user"
                      checked={formData.role === 'user'}
                      onChange={handleRoleChange}
                    /> User
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="role"
                      value="admin"
                      checked={formData.role === 'admin'}
                      onChange={handleRoleChange}
                    /> Admin
                  </label>
                </div>
              )}
  
              <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
            </form>

            <div className="explore-more">
              <p>Want to learn more about us? Check out our <a href="/">Home page</a> page!</p>
            </div>
  
          </div>
        </div>
  
        <div className='login-signup-right'></div>
      </div>
    </div>
  );
  
};

export default LoginSignUp;
 