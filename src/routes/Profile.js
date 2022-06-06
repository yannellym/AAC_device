import React from 'react';
import styled from 'styled-components';
import profilePhoto from '../assets/images/profilephoto.png';

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
  text{
    color: #FB7171;
    font-size: 30px;
    padding: 0 3%;
    margin: 0 20px;
    box-shadow: 5px 2px 6px gray;
  }
`;

function Profile() {
  return (
    <div>
      <ProfileDiv>
        <img src={profilePhoto} alt="profile" />
        <h1>Hi! </h1>
        <h1>
          My name is
          <text> NAME </text>.
        </h1>
        <h1>
          I am
          <text>AGE</text>
          years old .
        </h1>
      </ProfileDiv>
    </div>
  );
}

export default Profile;
