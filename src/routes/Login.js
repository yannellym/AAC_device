/* eslint-disable import/no-cycle */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background2 from '../assets/images/background2.png';
import GoogleButton from '../components/GoogleButton';

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

function Login() {
  return (
    <LoginDiv>
      <p className="title">Sign In</p>
      <section className="login-box">
        <p className="welcome">I&apos;m so glad you&apos;re here 😊 </p>
        <h1>Log in to get started!</h1>
        <GoogleButton />
        <text>
          <Link to="/home">Sign in as a guest</Link>
        </text>
      </section>
    </LoginDiv>
  );
}

export default Login;
