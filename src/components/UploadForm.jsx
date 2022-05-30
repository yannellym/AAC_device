/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

const FormSection = styled.section`
  width: 60%;
  height: 50vh;
  background-color: #A0B49C;
  margin: 5% auto;
  border-radius: 10px;
  
  form{
    padding: 15% 5%;
    border: red solid 2px;
    width: 60%;
    height: 50%;
    margin: 0 auto;
  }
  label{
    font-size: 2rem;
  }
  input{
    height: 40px;
    width: 50%;
    border-radius: 10px;
    border: none;
  }
  button{
    display: flex;
    height: 40px;
    min-width: 40%;
    padding: 3%;
    color: white;
    justify-content: space-around;
    border-radius: 10px;
    border: none;
    background-color: rgb(239,50,50);
    margin: 5% auto;
  }
`;

function UploadForm() {
  return (
    <FormSection>
      <form>
        <div>
          <label htmlFor="name">Photo Label : </label>
          <input id="photoLabel" type="text" />
        </div>
        <div>
          <label htmlFor="email">Upload Photo : </label>
          <input id="UploadPhoto" type="file" />
        </div>
        <button type="submit">
          <h1>UPLOAD</h1>
          <img src="https://img.icons8.com/material-rounded/24/000000/upload--v1.png" />
        </button>
      </form>
    </FormSection>
  );
}

export default UploadForm;
