/* eslint-disable no-alert */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background2 from '../assets/images/background2.png';
import { signup, login, logout, useAuth } from './firebaseConfig';
import Profile from './Profile';

const LoginDiv = styled.div`
  background-color: #ffaa00;
  background-image: url("${background2}");
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  
  h1{
    text-align: center;
  }
  .title{
    font-size: 2.5rem;
    color: rgb(160,53,34);
    text-align: center;
    padding-top: 8rem;
    width: 15%;
    margin: 0 auto;
    border-bottom: 3px solid rgb(160,53,34);
  }
  .welcome{
    font-size: 2.2rem;
    padding-top: 5%;
    color: rgb(160,53,34);
  }
  .login-box{
    margin: 3% auto;
    min-width: 300px;
    max-width: 44%;
    height: 20rem;
    text-align: center;
    background-color: white;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.75);
  }
  .login-box > h1{
    margin: 1.5rem;
  }
  .button-div{
    border: red solid 2px;
  }
  text{
    padding: 2%;
    color: green;
  }
  `;

export default function App() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('Error!');
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('Error!');
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
          <p className="title">Sign In</p>
          <section className="login-box">
            <p className="welcome">I&apos;m so glad you&apos;re here 😊 </p>
            <h1>Log in to get started!</h1>
            <text>
              <div className="fields">
                <form>
                  <input ref={emailRef} placeholder="Email" autoComplete="email" />
                  <input ref={passwordRef} type="password" autoComplete="email" placeholder="Password" />
                  <button type="button" disabled={loading} onClick={handleSignup}>Sign Up</button>
                  <button type="button" disabled={loading} onClick={handleLogin}>Log In</button>
                </form>
              </div>
              <Link to="/home">Sign in as a guest</Link>
            </text>
            <div>Currently logged in as: { currentUser?.email } </div>
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
