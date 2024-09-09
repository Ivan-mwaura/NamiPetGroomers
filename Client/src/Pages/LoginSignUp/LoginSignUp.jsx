import React, { useState } from 'react';
import './LoginSignUp.scss';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user', // Default role
  });

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
      let endpoint = isSignUp ? 'http://localhost:5000/api/v1/signUp' : 'http://localhost:5000/api/v1/login';
      if (formData.role === 'admin') {
        endpoint = 'http://localhost:5000/api/v1/adminLogin'; // Send to /admin/signUp or /admin/login
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

      console.log(response.data); 
      
      if(response.data.msg === "Account created successfully") {



          if(response.data.token) {
          localStorage.setItem('UserToken', response.data.token);
          window.location.href = '/'; // Redirect to home page
          toast.success("Account created successfully");
        } 

      }

      if(response.data.msg === "Login successful") {

       

        if(response.data.AdminToken) {
          localStorage.setItem('AdminToken', response.data.AdminToken);
          window.location.href = '/admin/'; // Redirect to home page
          toast.success("Login successful");
        }
        if(response.data.token) {
          localStorage.setItem('UserToken', response.data.token);
          localStorage.setItem('UserEmail', response.data.user.email);
          window.location.href = '/'; // Redirect to home page
          toast.success("Login successful");
        }

      

        //window.location.href = '/'; // Redirect to home page
      } 
      else{
        toast.error(response.data.msg);
      }
      
    } catch (error) {
      console.error(error); // Handle error as needed
    }
  };

  return (
    <div className='form-hero'>
      <div className="form-container">
        <div className="tabs">
          <button className={`tab ${isSignUp ? 'active' : ''}`} onClick={() => setIsSignUp(true)}>Sign Up</button>
          <button className={`tab ${!isSignUp ? 'active' : ''}`} onClick={() => setIsSignUp(false)}>Log In</button>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          {isSignUp ? (
            <>
              <h2>Sign Up for Free</h2>
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
              {/*<select name="role" value={formData.role} onChange={handleRoleChange}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>*/}
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
          <button type="submit">{isSignUp ? 'Get Started' : 'Log In'}</button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignUp;
