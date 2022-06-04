import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo-opt1.png';

const Nav = styled.div`
  background: #95DC8385;
  height: 99px;
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
`;

function NavBar() {
  return (
    <Nav>
      <div>
        <img className="nav--logo" src={Logo} alt="polly logo" />
      </div>
      <div className="nav--icons">
        <Link to="/">
          <img src="https://img.icons8.com/material-rounded/48/000000/home.png" alt="home icon" />
        </Link>
        <Link to="/upload">
          <img src="https://img.icons8.com/material-sharp/48/000000/upload--v1.png" alt="upload icon" />
        </Link>
        <Link to="/profile">
          <img src="https://img.icons8.com/material/48/000000/user-male-circle--v1.png" alt="user icon" />
        </Link>
      </div>
    </Nav>
  );
}

export default NavBar;
