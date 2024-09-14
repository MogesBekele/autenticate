import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.email || !values.password) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/auth/login', values);
      const { token } = response.data;
  
      if (response.status === 200 && token) {
        localStorage.setItem('token', token);  // Store token in localStorage
        navigate('/');  // Redirect to home page
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <h4>Log In</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={changeHandler}
              value={values.email}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"  // Changed to password type for security
              placeholder="Enter Your Password"
              name="password"
              onChange={changeHandler}
              value={values.password}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Submit</button>
        </form>
        <div>
          <span>Don't have Account?</span>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
