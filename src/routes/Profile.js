import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import profilePhoto from '../assets/images/profilephoto.png';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import NavBar from '../components/Navbar';
import { auth, storage } from './firebaseConfig';

const ProfileDiv = styled.div`
  width: 80%;
  height: 75vh;
  margin: 3% auto;
  text-align: center;
  line-height: 2.3;
  img{
    justify-content: center;
    align-items: center;
    width: 40%;
    border-radius: 50%;
  }
  .info-input{
    color: #FB7171;
    font-size: 20px;
    padding: 1% 3%;
    margin: 0 20px;
    box-shadow: 5px 2px 6px gray;
    width: 30%;
  }
  .age{
    width: 11%;
  }
  ::placeholder{
    color: #ededed;
    opacity: 0.5;
  }
  .save-button{
    background: none;
    border: none;
    font-size: 25px;
    padding-left: 2%;
  }
`;

function Profile() {
  const [photoURL, setPhotoURL] = useState('https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Conure-300x300.jpg');
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('Awesome Name');
  const [age, setAge] = useState(100);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const currentUser = auth;

  const imageListRef = ref(storage, 'profile/');
  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
      console.log(setName);
      console.log(setAge);
      console.log(loading);
      console.log(setLoading);
      console.log(photo);
      console.log(currentUser);
      console.log(profileImage);
      console.log(setProfileImage);
    }
  }
  function handleUpload() {
    if (photoURL == null) return;
    const imageRef = ref(storage, `profile/${photoURL.name}`);
    uploadBytes(imageRef, photoURL).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setPhotoURL(url);
      });
    });
  }
  // listAll(imageListRef).then((result) => {
  //   result.items.forEach((item) => {
  //     getDownloadURL(item).then((url) => {
  //       setPhotoURL(url);
  //     });
  //   });
  // });
  // console.log(getDownloadURL(result.items.at(0)).then((url) => {
  // setPhotoURL(url);
  // }));

  useEffect(() => {
    listAll(imageListRef).then((result) => {
      getDownloadURL(result.items.at(0)).then((url) => { setPhotoURL(url); });
    });
  }, []);

  return (
    <div>
      <NavBar />
      <ProfileDiv>
        <img src={photoURL} alt="profile" />
        <section className="photo-section">
          <input type="file" className="photo-uploader" onChange={(e) => { setPhotoURL(e.target.files[0]); }} />
          <button type="submit" className="file-upload" onClick={handleUpload}>Upload</button>
        </section>
        <h1>
          Hi, My name is
          <input type="text" className="info-input" onChange={handleChange} placeholder={name} />
          <button type="button" className="save-button">✅</button>
        </h1>
        <h1>
          I am
          <input type="text" className="info-input age" onChange={handleChange} placeholder={age} />
          years old
          <button type="button" className="save-button"> ✅</button>
        </h1>
      </ProfileDiv>
    </div>
  );
}

export default Profile;
