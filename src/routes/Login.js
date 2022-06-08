import React from 'react';
import styled from 'styled-components';
// import background from '../assets/images/background.png';
import { Link } from 'react-router-dom';
import GoogleButton from '../components/GoogleButton';

const LoginDiv = styled.div`
background-color: #ffaa00;

background-attachment: fixed;
background-size: cover;
.login {
    display: inline-block;
    width: 100%;
    height: 45rem;
    background-attachment: fixed;
    background-size: cover;
  }
  .login-title{
    display: flex;
    margin: 3% auto;
    min-width:300px;
    width: 20%;
    font-size: 20px;
    justify-content: space-between;
  }
  `;

function Login() {
  return (
    <LoginDiv>
      <div className="login">
        <section className="login-title">
          <p className="login-select">Sign In</p>
          <p className="signup-unselect"> <Link to="/signup">Sign Up</Link></p>
        </section>
        <section className="login-box">
          <h2>Welcome Back! 👋 </h2>
          <p>Sign in to get started!</p>
          <GoogleButton />
          <h1>{localStorage.getItem('name')}</h1>
          <h1>{localStorage.getItem('email')}</h1>
          <img src={localStorage.getItem('profilePic')} />
        </section>
      </div>
    </LoginDiv>
  );
}

export default Login;
