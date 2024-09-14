import React, { useState } from "react";
import './Register.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate()

  const [values, setValues] = useState({
    userName: '',
    email: '',
    password: ''
  })

  const changeHandler = (e)=>{
    setValues({...values, [e.target.name]:e.target.value})
  }
  const handleSubmit = async(e)=>{
   e.preventDefault()
 
   try {
    const response = await axios.post('http://localhost:3000/auth/register', values);

    if(response.status===201){
      navigate('/login')
    }
    console.log(response)
   } catch (error) {
    console.log(error)
    
   }


  }

  return (
    <>
      <div className="container">
        <h4>Register</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name:</label>
            <input type="text" placeholder="Enter Your Name" name="userName" onChange={changeHandler} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Enter Your Email" name="email"  onChange={changeHandler}/>
          </div>
          <div>
            <label>Password:</label>
            <input type="text" placeholder="Enter Your Password" name="password" onChange={changeHandler} />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="acount">
          <span>already Have an Account? </span>
           <Link to="/login">Login</Link>
        
        </div>
      </div>

    </>
  );
};

export default Register;
