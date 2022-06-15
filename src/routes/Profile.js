import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth, upload } from './firebaseConfig';
import NavBar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileDiv = styled.div`
  width: 80%;
  height: 75vh;
  margin: 2% auto;
  text-align: center;
  line-height: 2.3;
  img{
    justify-content: center;
    align-items: center;
    width: 75%;
    border-radius: 50%;
    max-height: 300px;
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
  .photo-section{
    max-width: 40vw;
    height: 48vh;
    display: inline-block;
  }
  .button{
    background-color: rgb(0,186,0);
    padding: 10px;
    border-radius: 10px;
    color: white;
    border: none;
    box-shadow: 2px 4px 4px -1px rgba(0,0,0,0.75);
    cursor: pointer;
  }
  .button:hover{
    background-color: red;
  }
  .primaryModal{
    color: red;
    background-color: red;
  }
  div{
    position: absolute;
    right: 20px;
    width: 200px;
  }
`;

export default function Profile() {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);
  const [age, setAge] = useState(100);
  const [photoURL, setPhotoURL] = useState('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <div>
      <NavBar />
      <ProfileDiv>
        <div>
          <Button variant="light" onClick={handleShow}>
            <img src="https://img.icons8.com/material-outlined/48/undefined/settings--v1.png" />
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit your personal information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Awesome Name"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="100"
                    autoFocus
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <section className="photo-section">
          <img src={photoURL} alt="profile" />
          <input type="file" onChange={handleChange} />
          <button type="button" className={photo ? 'button' : null} disabled={loading || !photo} onClick={handleClick}>Upload</button>
        </section>
        <h1>
          Hi, My name is
          <input type="text" className="info-input" onChange={(e) => setName(e.target.value)} placeholder={name} />
          <button type="button" className="save-button">✅</button>
        </h1>
        <h1>
          I am
          <input type="text" className="info-input age" onChange={(e) => setAge(e.target.value)} placeholder={age} />
          years old
          <button type="button" className="save-button">  ✅</button>
        </h1>
        <h1>Email: {currentUser?.email}</h1>
      </ProfileDiv>
    </div>
  );
}
