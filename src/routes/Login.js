import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import background from '../assets/images/background.png';
// import { useAuth, login } from './firebaseConfig';

const LoginDiv = styled.div`
background-color: #ffaa00;
background-image: url("${background}");
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
  .login-select{
    margin-bottom: 2%;
    border-bottom: #ffffff 4px solid;
    padding: 0 2rem;
    font-weight: bold;
    color: white;
  }
  .login-box{
    margin: 0 auto;
    min-width: 500px;
    max-width: 45%;
    height: 30rem;
    text-align: center;
    box-shadow: 1px 0px 5px var(--green);
    background-color: white;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.75);
  }
  .login-box>h2{
    padding-top: 5%;
    font-size: 1.8rem;
    color: var(--green); 
  }
  .login-box>p{
    margin-top: -10px;
  }
  .login-form{
    min-width: 65%;
    display: inline-block;
    height: 10rem;
    line-height: 4;
  }
  form>input{
    min-width: 400px;
    margin-bottom: 10px;
    height: 50px;
    border-radius: 8px;
    border: 1px solid gray;
    padding: 5px;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }
 
  .login-button{
    padding-top: 2%;
  }
  .signup-unselect>a{ 
    text-decoration:none;
    color: rgb(255, 255, 255);
  }
  .login-button-bottom>p>a{
    color:var(--green);
    text-decoration: none;
  }

  .login-error{
    color: red;
  }
  .guest{
    color: green;
    margin-top: -15px;
    font-size: 13px;
  }
  .already-loggedin {
    display: inline-block;
    width: 100%;
    height: 45rem;
    background-attachment: fixed;
    background-size: cover;
  }
  .already-loggedin > h1 {
    color: white;
    margin: 5rem auto;
    font-size: 3rem;
  }
  .already-loggedin > img {
    width: 40%;
    height:50%;
    margin-left: 25rem;
  }
  .already-loggedin > a {
    background-color: red;
    color: white;
    margin: 2% 40%;
    font-size: 2rem;
    display: inline-block;
    width: 20%;
    padding: 1.5%;
    border-radius: 10px;
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
          <form className="login-form">
            <input
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="section-email"
            //   onChange={(event) => handleInputs(event)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="section-current-password"
            //   onChange={(event) => handleInputs(event)}
            />
            {/* <section className="login-error">{error}</section> */}
            <Link to="/login">

              <div>
                <input
                  type="submit"
                  value="Sign In"
                  className="login-button"
                //   onClick={handleLogin}
                />
              </div>
            </Link>
            <Link to="/home"><h1 className="guest">Sign In as a guest </h1> </Link>
            <section className="login-button-bottom">
              <p>Dont have an account? <Link to="/signup"><strong className="signup-link"> Sign Up</strong></Link></p>
            </section>
          </form>
        </section>
      </div>
    </LoginDiv>
  );
}

export default Login;
