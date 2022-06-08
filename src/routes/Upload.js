import React from 'react';
import styled from 'styled-components';
import UploadForm from '../components/UploadForm';
import NavBar from '../components/Navbar';

const Header = styled.section`
  display: flex;
  justify-content: space-around;
  width: 40%;
  outline: red solid;
  margin: 5% auto;
  
  text{
    font-size: 2rem;
  }
`;

function Upload() {
  return (
    <div>
      <NavBar />
      <Header>
        <text>Upload your own Photo</text>
        <img src="https://img.icons8.com/ios-filled/40/000000/camera--v1.png" />
      </Header>
      <UploadForm />
    </div>
  );
}

export default Upload;
