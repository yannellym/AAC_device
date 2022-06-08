import React from 'react';
import styled from 'styled-components';
import background from '../assets/images/background.png';
import GoogleButton from '../components/GoogleButton';

const LoginDiv = styled.div`
  background-color: #ffaa00;
  background-image: url("${background}");
  background-attachment: fixed;
  background-size: cover;
  height: 90vh;
  
  .title{
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
    padding: 2rem;
  }
  .welcome{
    font-size: 2.2rem;
    padding-top: 5%;
  }
  .login-box{
    margin: 0 auto;
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
  `;

function Login() {
  return (
    <LoginDiv>
      <p className="title">Sign In</p>
      <section className="login-box">
        <p className="welcome">Welcome to our community!</p>
        <h1>Log in to get started!</h1>
        <GoogleButton />
      </section>
    </LoginDiv>
  );
}

export default Login;

