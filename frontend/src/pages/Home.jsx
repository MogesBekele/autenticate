import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const fetchData = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirect to login if token is not found
      navigate('/login');
      return;
    }

    try {
      // Make authenticated request to fetch home data
      const response = await axios.get('http://localhost:3000/auth/home', {
        headers: {
          Authorization: `Bearer ${token}`,  // Send token in headers
        },
      });

      console.log(response.data);  // Successfully retrieved data
    } catch (error) {
      // Handle error and redirect to login
      navigate('/login');
      console.log('Error:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchData();  // Fetch data on component mount
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
