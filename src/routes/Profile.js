import React, { useEffect, useState, useReducer } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useAuth, upload, database } from './firebaseConfig';
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
  .userInformation{
    border: red solid 3px;
    width: 70vw;
    margin: 0 auto;
  }
  .userInformation >h1
`;

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      name: '',
      age: 0,
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function Profile() {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png');
  const [show, setShow] = useState(false);
  const [informationData, setInformationData] = useReducer(formReducer, {});
  const dbInstance = collection(database, `info${currentUser?.email}`);
  const [userInformation, setUserInformation] = useState('' || []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChange(e) { // to handle the change when the file button is clicked
    if (e.target.files[0]) { // select only the first file chosen
      setPhoto(e.target.files[0]); // to set the profile photo to be the file selected
    }
  }

  const handleInformationChange = (event) => { // to handle the change of information in the profile
    setInformationData({ // This will set the information data to the information coming from the inputs
      name: event.target.name,
      value: event.target.value,
    });
    console.log(informationData);
  };

  function handleClick() {
    upload(photo, currentUser, setLoading); // to upload the photo to the database
  }

  const handleSubmit = (event) => { // handles the information in the modal window form
    event.preventDefault();
    addDoc(dbInstance, informationData) // add the data to the onformationData database
      .then(() => {
        console.log('submitted');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getData = async () => {
    const informationCollection = collection(database, `info${currentUser?.email}`); // go into the collection
    const informationSnapshot = await getDocs(informationCollection); // get the information from the collection by doing a snapshot
    const informationInputs = informationSnapshot.docs.map((doc) => ( // map through all of the documents in the collection
      { ...doc.data(), id: doc.id, // get the document data, and its ID.
      }));
    setUserInformation(informationInputs); // Set the user information.
  };

  useEffect(() => {
    if (currentUser?.photoURL) { // if there is a current user, take the photoUrl
      setPhotoURL(currentUser.photoURL); // set the photo url to the user's photo URL.
    }
    getData(); // get the user's information from the database.
  }, [currentUser]); // refresh whenever the user's information changes.

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
                    type="text"
                    name="name"
                    placeholder="Awesome Name"
                    autoFocus
                    value={informationData.name}
                    onChange={handleInformationChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    placeholder="100"
                    autoFocus
                    value={informationData.age}
                    onChange={handleInformationChange}
                  />
                </Form.Group>
                <Button variant="success" onClick={handleSubmit} type="button">
                  Save Changes
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <section className="photo-section">
          <img src={photoURL} alt="profile" />
          <input type="file" onChange={handleChange} />
          <button type="button" className={photo ? 'button' : null} disabled={loading || !photo} onClick={handleClick}>Upload</button>
        </section>
        <div className="userInformation">
          <h1> Hi, My name is <span>{userInformation[0]?.name}</span></h1>
          <h1> I am <span>{userInformation[0]?.age} </span>years old</h1>
          <h1>My Email is <span>{currentUser?.email}</span></h1>
        </div>
      </ProfileDiv>
    </div>
  );
}
