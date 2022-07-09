/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { useAuth, database, storage, upload } from '../routes/firebaseConfig';

const FormSection = styled.section`
  min-width: 500px;
  max-height: 300px;
  background: rgb(240, 243, 244);
  margin: -2rem auto;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, .4);
  
  input[type=file]:focus {
    outline: 2px solid red;
    outline: -webkit-focus-ring-color auto 5px;
  }
  label {
    display: inline;
    margin: 5px 0;
    padding: 3% 0;
    font-size: 18px;
    font-family: "Palanquin Dark";
  }
  .form-group {
    width: 450px;
    margin: 2.4rem auto;
    margin-left: 10%;
    display: block;
    line-height: 2;
  }
  .form-controll {
    display: inline;
    min-width: 50%;
    font-size: 18px;
    background-color: #fff;
    border-radius: 5px;
    color: black;
    margin-left: 3%;
      
    &:focus {
      outline: 2px solid red;
    }
  }
  input[type=file]{
    color: rgb(65, 194, 255);
    width: 54%;
    margin-left: 3%;
    padding-left: 5%;
  }
  input[type=file]::file-selector-button{
    background-color: rgb(128, 198, 255);
    height: 40px;
    width: 40%;
    font-size: 17px;
    display: inline;
    border-radius: 5px;
  }
  .submit-div{
    outline: red solid 2px;
    margin: 0 auto;
    width: 100%;
    padding: 0;
  }
  button {
    padding: 8px 30px;
    background: rgb(65, 194, 255);
    color: #fff;
    text-transform: uppercase;
    font-family: "Palanquin Dark";
    font-size: 15px;
    font-weight: 600;
    box-shadow: 0px 1px 2px black;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 5%;
    width: 90%;
  }
  input[type=file]:valid {
    color: rgb(62,153,69);
  }
  .propmt {
    width: max-content;
    margin: 10px auto;
    text-align: center;
    font-size: 12px;
    font-family: "Palanquin Dark";
    color: rgb(62,153,69);
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
  const dbInstance = collection(database, `${currentUser?.email}`); // If there's an user, get the database with the user's email
  // eslint-disable-next-line no-unused-vars
  const [imageUrls, setImageUrls] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
  const [formData, setFormData] = useReducer(formReducer, {});
  const [isSuccessful, setIsSuccessful] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => { // Receive all the event data
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
    setImageUpload(event.target.files[0]); // sets image to first file
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDoc(dbInstance, formData); // adds a document to the document database
    const imageRef = ref(storage, `${currentUser.email}/${imageUpload.name}`); // references the storage where the user's email and image name are.
    upload(imageUpload, formData.imgUrl);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => { // Gets the image's upload bites(info) and gets URL.
        setImageUrls((prev) => [...prev, url]); // sets the image's URL to the URL received.
      });
    })
      .then(() => {
        setIsSuccessful(true);
        // eslint-disable-next-line no-return-assign
        setTimeout(() => navigate('/home', { replace: true }), 800);
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
            required
          />
        </div>
        <div className="form-group file-area">
          <label htmlFor="imgUrl">Select Photo :</label>
          <input
            type="file"
            name="imgUrl"
            onChange={handleChange}
            value={formData.imgUrl || ''}
            required
          />
          <button type="submit">Upload Photo</button>
        </div>
        <div
          className="form-group propmt"
        >
          {isSuccessful && <p>Picture uploaded successfully!</p>}
        </div>
      </form>
    </FormSection>
  );
}

export default UploadForm;
