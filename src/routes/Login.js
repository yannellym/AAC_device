import React from 'react';
import styled from 'styled-components';
// import background from '../assets/images/background.png';
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
      <GoogleButton />
      <h1>{localStorage.getItem('name')}</h1>
      <h1>{localStorage.getItem('email')}</h1>
      <img src={localStorage.getItem('profilePic')} />
    </LoginDiv>
  );
}

export default Login;
