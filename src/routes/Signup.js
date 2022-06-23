/* eslint-disable no-alert */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background3 from '../assets/images/background3.png';
import { signup, logout, useAuth } from './firebaseConfig';
import Profile from './Profile';

const LoginDiv = styled.div`
  background-color: #ffaa00;
  background-image: url("${background3}");
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  
  .title {
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
    padding-top: 4rem;
    width: 15%;
    margin: 0 auto;
    border-bottom: 3px solid #fff;
  }
  .welcome {
    font-size: 2.2rem;
    padding-top: 5%;
    color: rgb(37,117,35);
  }
  .login-box {
    margin: 3% auto;
    min-width: 450px;
    max-width: 48%;
    height: 24rem;
    text-align: center;
    background-color: white;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.75);
  }
  button{
    margin-top: 3%;
    padding: 8px 10px;
    border-radius: 10px;
    color: #fff;
    background-color: rgb(37,117,35);
    border: none;
    width: 6rem;
    font-size: 1.3rem;
    box-shadow: 2px 4px 4px -1px rgba(0,0,0,0.75);
  }
  text{
    padding: 2%;
    color: green;
  }
  form>input{
    min-width: 350px;
    margin-bottom: 10px;
    height: 50px;
    border-radius: 8px;
    border: 1px solid gray;
    padding: 15px;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }
  .signUp{
    font-size: 22px;
    margin-top: -10px;
  }
  h4{
      padding-top: 5%;
  }
  span{
    color: green;
  }
  `;

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('Woah! Please check your email and password ');
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert('Error!');
    }
    setLoading(false);
  }

  return (
    <div id="main">
      {!currentUser
        && (
        <LoginDiv>
          <p className="title">Sign Up</p>
          <section className="login-box">
            <p className="welcome"> Welcome to Polly 😊</p>
            <p className="signUp"> Sign up to get started</p>
            <form>
              <input ref={emailRef} placeholder="Email" autoComplete="email" />
              <input ref={passwordRef} type="password" autoComplete="email" placeholder="Password" />
            </form>
            <button type="button" disabled={loading} onClick={handleSignup}>Sign Up</button>
            <h4>
              Already have an account? <Link to="/"><span>Log in!</span></Link>
            </h4>
          </section>
        </LoginDiv>
        )}

      {currentUser
        && (
        <>
          <Profile />
          <button type="button" disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button>
        </>
        )}
    </div>
  );
}
