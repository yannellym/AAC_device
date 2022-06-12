/* eslint-disable no-alert */
import React from 'react';
import styled from 'styled-components';
import { NavLink, Navigate } from 'react-router-dom';
import Logo from '../assets/images/logo-opt1.png';
import { logout } from '../routes/firebaseConfig';

const Nav = styled.div`
  background: #95DC8385;
  height: 7.5rem;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav--logo {
    border: 2px solid red;
  }

  .nav--icons {
    display: flex;
    padding-right: 50px;
    gap: 60px;
  }
  p{
    padding-left: 13%;
  }
`;
function NavBar() {
  async function handleLogout() {
    try {
      await logout();
        <Navigate to="/" />;
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
        <button type="button" onClick={handleLogout}>
          <img src="https://img.icons8.com/ios-filled/50/undefined/exit-sign.png" />
          <p>logout</p>
        </button>
      </div>
    </Nav>
  );
}

export default NavBar;
