/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth, database, storage, upload } from '../routes/firebaseConfig';

const FormSection = styled.section`
  width: 50%;
  height: 50vh;
  background-color: #c9e8d2;
  margin: 5% auto;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, .4);
  
    input[type=file]:focus {
      outline: 2px solid rgba(255,255,255,0.5);
      outline: -webkit-focus-ring-color auto 5px;
    }
    label {
      font-weight: 500;
      display: block;
      margin: 5px 0;
      padding: 5% 0;
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
      color: black;
      font-weight: 200;
      
      &:focus {
        outline: 2px solid rgba(255,255,255,0.5);
        outline: -webkit-focus-ring-color auto 5px;
      }
    }
    
    button {
      padding: 8px 30px;
      background: rgba(255,255,255,0.8);
      color: red;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 11px;
      border: 0;
      box-shadow: 0px 1px 2px black;
      cursor: pointer;
      border-radius: 8px;
      height: 40px;
    }
    
    .form-group {
      max-width: 400px;
      margin: 2rem auto;
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
const formReducer = (state, event) => {
  if (event.reset) {
    return {
      label: '',
      imgUrl: '',
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};
function UploadForm() {
  const currentUser = useAuth();
  const dbInstance = collection(database, `${currentUser?.email}`);
  // const [imageUpload, setImageUpload] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [imageUrls, setImageUrls] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
    setImageUpload(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDoc(dbInstance, formData);
    const imageRef = ref(storage, `${currentUser.email}/${imageUpload.name}`);
    upload(imageUpload, formData.imgUrl);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
      console.log(imageUrls);
    })
      .then(() => {
        console.log('submitted');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <FormSection>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="label">Label for Photo :</label>
          <input
            type="text"
            name="label"
            value={formData.label || ''}
            onChange={handleChange}
            className="form-controll"
          />
        </div>
        <div className="form-group file-area">
          <label htmlFor="imgUrl">Please select Photo: </label>
          <input
            type="file"
            name="imgUrl"
            onChange={handleChange}
            value={formData.imgUrl || ''}
            required="required"
            multiple="multiple"
          />
        </div>
        <div className="form-group">
          <button type="submit">Upload Photo</button>
        </div>
      </form>
    </FormSection>
  );
}

export default UploadForm;
