import React, { useState } from 'react';
import styled from 'styled-components';
// import profilePhoto from '../assets/images/profilephoto.png';
import NavBar from '../components/Navbar';

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
  }
`;

function Profile() {
  const [photoURL] = useState('https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Conure-300x300.jpg');
  const [name, setName] = useState('Awesome Name');
  const [age, setAge] = useState(100);

  return (
    <div>
      <NavBar />
      <ProfileDiv>
        <img src={photoURL} alt="profile" />
        <section className="photo-section">
          <input type="file" className="photo-uploader" />
        </section>
        <h1>Hi! </h1>
        <h1>
          My name is
          <input type="text" className="info-input" onChange={(e) => setName(e.target.value)} placeholder={name} />
          <button type="button" className="save-button">✅</button>
        </h1>
        <h1>
          I am
          <input type="text" className="info-input age" onChange={(e) => setAge(e.target.value)} placeholder={age} />
          years old
          <button type="button" className="save-button">  ✅</button>
        </h1>
      </ProfileDiv>
    </div>
  );
}

export default Profile;
