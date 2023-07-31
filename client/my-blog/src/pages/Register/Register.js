import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import './Register.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Register() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  //Handle Submit:
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:5000/api/auth/register'
      const res = await axios.post('auth/register', {
        userName,
        email,
        password
      });
      res.data && window.location.replace("/Login")
      console.log(res);
    }
    catch(error){
      console.log(error.response.data.message)
      setError(error.response.data.message);
    }
   
  }
  return (
    <div className='Register'>
      <span className="RegisterTitle">Register</span>
      <form action="" className="RegisterForm" onSubmit={handleSubmit}>
        <label>UserName</label>
        {error && <div className='ErrorMessage'>{error}</div>}
        <input type='text' className="RegisterInput"
          placeholder='Enter Your User Name'
          onChange={(e) => (setUserName(e.target.value))}>
        </input>
        <label>Email</label>
        <input type='email' className="RegisterInput" placeholder='name@gmail.com'
          onChange={(e) => (setEmail(e.target.value))}>
        </input>
        <label>Password</label>
        <input type='password' className="RegisterInput" placeholder='write your password'
          onChange={(e) => (setPassword(e.target.value))}></input>
        <button className="RegisterButton" type="submit">Register</button>
      </form>
      <button className="RegisterLoginButton">
        <Link to='/Login' className="link">Login</Link></button>
        
    </div>
  )
}
