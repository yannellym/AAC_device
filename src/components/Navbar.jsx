import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const Nav = styled.div`
  background: #95DC8385;
  height: 99px;
  padding 20px;
  display: flex;
`;

function NavBar() {
  return (
    <Nav>
      <img className="" src={Logo} alt="polly logo" />
      <h1 className="nav--title">Polly</h1>
      <Link to="/">
        <img src="https://img.icons8.com/material-rounded/48/000000/home.png" alt="home icon" />
      </Link>
      <Link to="/upload">
        <img src="https://img.icons8.com/material-sharp/48/000000/upload--v1.png" atl="upload icon" />
      </Link>
      <Link to="/profile">
        <img src="https://img.icons8.com/material/48/000000/user-male-circle--v1.png" atl="user icon" />
      </Link>
    </Nav>
  );
}

export default NavBar;
