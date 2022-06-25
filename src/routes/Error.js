import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ErrorSection = styled.div`
  background: rgb(65, 194, 255);
  width: 100vw;
  height: 100vh;
  text-align: center;
  padding-top: 5%;
  color: #fff;

  img{
    margin: 5%;
    border-radius: 10px;
    box-shadow: 2px 4px 4px -1px rgba(0,0,0,0.75)
  }
  .home-icon {
    margin: 2%;
    padding: 1%;
    background-color: #fff;
    color: red;
  }
  .home-icon:hover{
    background-color: rgb(255, 162, 16);
  }
`;

function Error() {
  return (
    <ErrorSection>
      <h1>Oops, Looks like you are lost! </h1>
      <img src="https://media.istockphoto.com/photos/portrait-of-an-important-pigeon-picture-id1197010870?k=20&m=1197010870&s=612x612&w=0&h=tJ2H3yvXDw51iteYQcETjuZI9zg46HxXco_fVsMHp68=" alt="bird" />
      <h3>Click
        <NavLink to="/home">
          <img src="https://img.icons8.com/material-rounded/48/000000/home.png" alt="home icon" className="home-icon" />
        </NavLink>
        to go back home .
      </h3>
    </ErrorSection>
  );
}

export default Error;
