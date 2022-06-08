/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { signInWithGoogle } from '../routes/firebaseConfig';

const Button = styled.button`
    transition: background-color .3s, box-shadow .3s;
      
    padding: 42px 66px 42px 82px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    
    background-image: url("https://img.icons8.com/color/48/undefined/google-logo.png");
    background-color: white;
    background-repeat: no-repeat;
    background-position: 47px 20px;
    
    &:hover {
      box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
    }
    
    &:active {
      background-color: #eeeeee;
    }
    
    &:focus {
      outline: none;
      box-shadow: 
        0 -1px 0 rgba(0, 0, 0, .04),
        0 2px 4px rgba(0, 0, 0, .25),
        0 0 0 3px #c8dafc;
    }
  `;

function GoogleButton() {
  return (
    <div>
      <Button type="button" onClick={signInWithGoogle} className="login-with-google-btn" />
    </div>
  );
}

export default GoogleButton;
