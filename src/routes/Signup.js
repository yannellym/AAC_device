
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background2 from '../assets/images/background2.png';

const SignupDiv = styled.div`
background-color: #ffaa00;
background-image: url("${background2}");
background-attachment: fixed;
background-size: cover;
.signup{
    display: inline-block;
    width: 100%;
    height: 45rem;
    background-attachment: fixed;
    background-size: cover;
  }
  .signup-title{
    display: flex;
    margin: 3% auto;
    width: 20%;
    min-width: 200px;
    font-size: 20px;
    justify-content: space-between;
  }
  .signup-select{
    margin-bottom: 2%;
    border-bottom: #ffffff 4px solid;
    padding: 0 2rem;
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
  .signup-box{
    margin: 0 auto;
    min-width: 500px;
    max-width: 44%;
    height: 30rem;
    text-align: center;
    background-color: white;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.75);
  }
  .signup-box>h1{
    padding-top: 3%;
    color: var(--green); 
  }
  .signup-box>p{
    margin-top: -5px;
  }
  .signup-inputs{
    width: 80%;
    display: inline-block;
    height: 18rem;
    line-height: 4;
  }
  form{
    width: 100%;
    margin: 0 auto;
  }
  .info-inputs{
    max-width:100%;
  }
  .info-inputs>input{
    width: 100%;
    margin-bottom: 10px;
    height: 50px;
    border-radius: 8px;
    border: 1px solid gray;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }
  .name-inputs{
    display: flex;
    min-width: 400px;
    margin: 0 auto;
    margin-bottom: 2%;
  }
  .name-inputs>input{
    width: 100%;
    margin-bottom: 5px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid gray;
    padding-left: 4%;
    font-family: 'Inter', sans-serif;
  }
  .first-name{ 
    margin-right:4%;
  }
  .signup-button{
    padding-top: 3%;
  }
  .signup-link{
    color: var(--green); 
  }
  .login-unselect>a{ 
    text-decoration:none;
    color: rgb(255, 255, 255);
  }
  .signup-btn{
    color:var(--green);
    text-decoration: none;
    color: white;
    max-width: 100px;
    min-height: 35px;
  }
  input[type="email"],[type="password"],[type="text"]{
    padding-left:4%;
  }
`;

function Signup() {
  return (
    <SignupDiv>
      <div className="signup">
        <section className="signup-title">
          <p className="login-unselect"><Link to="/">Sign in</Link></p>
          <p className="signup-select">Sign Up</p>
        </section>
        <section className="signup-box">
          <h1>Welcome to our community!</h1>
          <p>Sign up to get started!</p>
          <section className="signup-inputs">
            <form>
              <section className="name-inputs">
                <input
                  type="text"
                  placeholder="First Name"
                //   onChange={(event) => handleInputs(event)}
                  name="firstname"
                  className="first-name"
                  autoComplete="section-name"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  autoComplete="section-additional-name"
                //   onChange={(event) => handleInputs(event)}
                  required
                />
              </section>
              <section className="info-inputs">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  autoComplete="section-email"
                //   onChange={(event) => handleInputs(event)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  autoComplete="section-current-password"
                //   onChange={(event) => handleInputs(event)}
                  required
                />
              </section>
              {/* <section className="login-error">{error}</section>
              <Link to={data.email !== '' && data.password !== '' ? '/marketfeed' : '/signup'}> <button className="signup-btn" disabled={loading || currentUser} onClick={handleSubmit}>Sign up</button></Link> */}
            </form>
          </section>
          <section>
            <p>Already have an account? <Link to="/login"><strong className="signup-link"> Sign in</strong></Link></p>
          </section>
        </section>
      </div>
    </SignupDiv>
  );
}

export default Signup;
