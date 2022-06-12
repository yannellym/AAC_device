/* eslint-disable no-alert */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background2 from '../assets/images/background2.png';
import { login, useAuth } from './firebaseConfig';
import Home from './Home';

const LoginDiv = styled.div`
  background-color: #ffaa00;
  background-image: url("${background2}");
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  
  .title{
    font-size: 2.5rem;
    color: rgb(160,53,34);
    text-align: center;
    padding-top: 4rem;
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
    min-width: 400px;
    max-width: 44%;
    height: 24rem;
    text-align: center;
    background-color: white;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.75);
  }
  .login-box > h1{
    margin: .5rem;
  }
  button{
    padding: 10px;
    border-radius: 10px;
    color: white;
    background-color: rgb(160,53,34);
    border: none;
    width: 6rem;
    font-size: .9rem;
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
  .loggedInAs{
    text-align: center;
    font-size: 18px;
    margin-top: 5rem;
    color: black;
    width: 60vw;
    margin: 0 auto;
  }
  span{
    color: green;
  }
  `;

export default function LogIn() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('Woah! Please check your email and password. ');
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
            <form>
              <input ref={emailRef} placeholder="Email" autoComplete="email" />
              <input ref={passwordRef} type="password" autoComplete="email" placeholder="Password" />
            </form>
            <button type="button" disabled={loading} onClick={handleLogin}>Log In</button>
            <text>
              <Link to="/home">Sign in as a guest *</Link>
            </text>
            <h4>Don&apos;t have an account? <Link to="/signup"><span>Sign Up!</span></Link></h4>
          </section>
          <div className="loggedInAs"> * For the full experience, we recommend that you sign up and create your own account. </div>
        </LoginDiv>
        )}

      {currentUser
        && (
        <Home />
        )}
    </div>
  );
}
