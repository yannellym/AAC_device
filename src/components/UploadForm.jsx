/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

const FormSection = styled.section`
  width: 50%;
  height: 50vh;
  background-color: #c9e8d2;
  margin: 5% auto;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, .4);
  
    input[type=file]:focus + .file-dummy {
      outline: 2px solid rgba(255,255,255,0.5);
      outline: -webkit-focus-ring-color auto 5px;
    }
    label {
      font-weight: 500;
      display: block;
      margin: 4px 0;
      text-transform: uppercase;
      font-size: 13px;
      overflow: hidden;
    }
    .form-controll {
      display: block;
      padding: 8px 16px;
      width: 100%;
      font-size: 16px;
      background-color: rgba(255,255,255,0.2);
      border: 1px solid rgba(255,255,255,0.3);
      color: #fff;
      font-weight: 200;
      
      &:focus {
        outline: 2px solid rgba(255,255,255,0.5);
        outline: -webkit-focus-ring-color auto 5px;
      }
    }
    
    button {
      padding: 8px 30px;
      background: rgba(255,255,255,0.8);
      color: #053777;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 11px;
      border: 0;
      text-shadow: 0 1px 2px #fff;
      cursor: pointer;
      border-radius: 8px;
    }
    
    .form-group {
      max-width: 500px;
      margin: auto;
      margin-bottom: 30px;
    }
    
    .back-to-article {
      color: #fff;
      text-transform: uppercase;
      font-size: 12px;
      position: absolute;
      right: 20px;
      top: 20px;
      text-decoration: none;
      display: inline-block;
      background: rgba(0,0,0,0.6);
      padding: 10px 18px;
      transition: all 0.3s ease-in-out;
      opacity: 0.6;
      
      &:hover {
        opacity: 1;
        background: rgba(0,0,0,0.8);
      }
    }
    input[type=file]:valid {
      border-color: rgba(0,255,0,0.4);
      background-color: rgba(0,255,0,0.3);
  
      .success {
        display: inline-block;
      }
      .default {
        display: none;
      }
    }
  }
`;

function UploadForm() {
  return (
    <FormSection>
      <form action method="post">
        <div className="form-group">
          <label htmlFor="title">Label for Photo :</label>
          <input type="text" name="title" id="title" className="form-controll" />
        </div>
        <div className="form-group file-area">
          <label htmlFor="images">Please select Photo: </label>
          <input type="file" name="images" id="images" required="required" multiple="multiple" />
        </div>
        <div className="form-group">
          <button type="submit">Upload Photo</button>
        </div>
      </form>

    </FormSection>
  );
}

export default UploadForm;
