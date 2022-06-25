/* eslint-disable no-alert */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo-opt1.png';
import { logout } from '../routes/firebaseConfig';

const Nav = styled.div`
  background: rgb(65, 194, 255);
  height: 7.5rem;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3%;
  a:hover{
    color: white;
  }
  
  .nav--icons {
    display: flex;
    padding-right: 50px;
    gap: 60px;
  }
  p{
    padding-left: 13%;
  }
  text{
    cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👋</text></svg>") 16 0,auto; 
  }
`;
function NavBar() {
  async function handleLogout() {
    try {
      await logout();
      window.location = '/';
    } catch {
      alert('Error!');
    }
  }
  return (
    <Nav>
      <div>
        <NavLink to="/home">
          <img className="nav--logo" src={Logo} alt="polly logo" />
        </NavLink>
      </div>
      <div className="nav--icons">
        <NavLink to="/home">
          <img src="https://img.icons8.com/material-rounded/48/000000/home.png" alt="home icon" />
          <p>Home</p>
        </NavLink>
        <NavLink to="/upload">
          <img src="https://img.icons8.com/material-sharp/48/000000/upload--v1.png" alt="upload icon" />
          <p>Upload</p>
        </NavLink>
        <NavLink to="/profile">
          <img src="https://img.icons8.com/material/48/000000/user-male-circle--v1.png" alt="user icon" />
          <p>Profile</p>
        </NavLink>
        <text onClick={handleLogout}>
          <img src="https://img.icons8.com/ios-filled/50/undefined/exit-sign.png" />
          <p>logout</p>
        </text>
      </div>
    </Nav>
  );
}

export default NavBar;
