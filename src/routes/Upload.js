/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import UploadForm from '../components/UploadForm';
import NavBar from '../components/Navbar';
import camera from '../assets/images/camera.gif';

const ProfileContainer = styled.div`
  height: 100vh;
`;

const Header = styled.section`
  display: flex;
  justify-content: space-around;
  width: 33%;
  margin: 4% auto;
  
  text{
    font-size: 2rem;
  }
  img{
    height: 3rem;
  }
`;

function Upload() {
  return (
    <ProfileContainer>
      <NavBar />
      <Header>
        <text>Upload your own Photo</text>
        <img src={camera} />
      </Header>
      <UploadForm />
    </ProfileContainer>
  );
}

export default Upload;
