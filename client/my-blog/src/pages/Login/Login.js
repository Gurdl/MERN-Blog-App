import React, { useContext, useRef } from 'react'
import './Login.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Context } from '../../Context/Context';
import axios from 'axios'
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context)
  const submitHandle = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', {
        userName: userRef.current.value,
        password: passwordRef.current.value
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      console.log("res.data");
      console.log(res.data);
    } catch (error) {
      console.log(error)
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  }
  console.log(user)
  return (
    <div className='Login'>
      <span className="LoginTitle">Login</span>
      <form onSubmit={submitHandle} className="loginForm">
        <label>User Name</label>
        <input className="LoginInput" placeholder='name@gmail.com'
          ref={userRef}></input>
        <label>Password</label>
        <input type='password' className="LoginInput" placeholder='write your password'
          ref={passwordRef}></input>
        <button className="loginButton" type='submit' disabled={isFetching}><Link to='/Login' className="link">Login</Link></button>
      </form>
      <button className="LoginRegisterButton">
        <Link to='/Register' className="link">Register</Link></button>
      <a href="#"> Forget Password</a>
    </div >
  )
}
