/* eslint-disable no-return-assign */
/* eslint-disable max-len */
import React, { useEffect, useState, useReducer } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { useAuth, upload, database } from './firebaseConfig';
import DefaultProfile from '../assets/images/profilephoto.png';
import NavBar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileDiv = styled.div`
  text-align: center;
  line-height: 2;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='600' viewBox='0 0 900 600'%3E%3Cg fill-opacity='0.21'%3E%3Cpath fill='%237B7B7B' d='M306.9 210.2c-1.2-22.8-13.5-42.7-40.8-41.1c-18.3 1.1-35.9 3.6-47.5 20.1c-5.2 7.4-10.6 15.6-11.4 24.9c-0.5 5.8 0.2 12 1.2 17.7c9 49.6 85.3 46.7 96.4 0.2C306.6 224.9 307.3 217.4 306.9 210.2z'/%3E%3Cpath fill='%23757d83' d='M137.2 481.3c-13.2-9.9-31.2-13.3-48.5-3.2c-12.6 7.3-19.1 17.4-21.1 28.2c-0.7 2.4-1.2 4.7-1.5 7c-8.2 35.4 33.7 78.9 72.6 48.6C167.6 539.3 164.4 501.6 137.2 481.3z'/%3E%3Cg fill='%236e7e8b' %3E%3Cpath d='M547.9 588.3c-7.1-34.2-61.6-52.7-87.5-16.9c-11.2 11.3-12.7 26.3-7.6 39.7c1.8 7.5 5.5 13.9 10.4 19.1c19.4 20.3 53.4 26.2 72.8 1.9C545.9 619.7 553.9 604.2 547.9 588.3z'/%3E%3Cpath d='M547.9-11.7c-7.1-34.2-61.6-52.7-87.5-16.9c-11.2 11.3-12.7 26.3-7.6 39.7c1.8 7.5 5.5 13.9 10.4 19.1c19.4 20.3 53.4 26.2 72.8 1.9C545.9 19.7 553.9 4.2 547.9-11.7z'/%3E%3C/g%3E%3Cpath fill='%23678094' d='M849.7 498c-22.3 1.3-43.2 7.5-52.7 29.5c-3.3 7.7-7.3 15.7-7 24.3c2 55.6 86.1 63.4 98.8 10.1C890.6 554.6 877.3 496.4 849.7 498z'/%3E%3Cpath fill='%2360829c' d='M762 291.1c-8.2-6.1-19.1-1.9-27.3 2.2c-7.4 3.7-14.4 8.2-21.6 12.1c-6.6 3.6-13.7 7-19.8 11.5c-18.3 13.5-2.5 45.1 10.6 56.4c17 14.6 41.6 15.9 59.6 2.1C794.1 351.8 790.7 312.4 762 291.1z'/%3E%3Cpath fill='%235a84a4' d='M863.3 170.3c-4.5-15.7-17.9-28.8-33.4-34.4c-16.2-5.8-38.4-2.9-51.8 8.1c-14.9 12.2-14.5 31.7-11.4 49c9.6 53.9 84.3 47.7 97-1.3C865.6 184.4 865.3 177.1 863.3 170.3z'/%3E%3Cpath fill='%235385ad' d='M598.4 86.1c-10.2 15.5-9.3 34.2-0.9 50.4c2.6 5 6.2 9.5 10.4 13.2c14.2 12.6 35.5 17.1 53.2 9.5c14.3-6.1 23.9-19.8 26.7-34.7C707.4 75.6 629.7 38.5 598.4 86.1z'/%3E%3Cpath fill='%234c87b5' d='M509.8 413.3c-17.3 22.6-11.8 59 17.5 75.3c22.6 12.6 52.2 1.7 63.8-20.9c21.4-42-9.2-85-56.5-71C523.8 399.9 515.6 405.8 509.8 413.3z'/%3E%3Cpath fill='%234689bc' d='M607.4 232.3c-0.5-0.4-1-0.8-1.4-1.2c-16.5-12.8-30.2-22.1-50.3-8.4c-15.5 10.6-29 30.3-31.4 49.1c-4.2 33.6 30.6 46.9 58.6 40.6C619.6 304.2 640.6 259.5 607.4 232.3z'/%3E%3Cpath fill='%23408ac4' d='M410.6 95c-36.5 1.3-74.1 41.8-43.1 74.3c19.8 20.9 54.4 20.7 74.6 0.5c20.5-20.4 18.4-53.1-6.9-68.6C427.7 96.6 419.2 94.7 410.6 95z'/%3E%3Cpath fill='%233a8ccc' d='M291.3 23c-0.1-0.1-0.1-0.1-0.2-0.2c-14.2-16.9-38.3-25.6-61.4-12.3c-13.5 7.8-20.5 18.7-22.7 30.2c-5.7 18 1.5 34.2 14.2 44.8c15.4 16.8 40.3 24.1 64.2 5.5c9.6-7.4 15-16.3 17.2-25.4C308.6 48.8 302.7 33.6 291.3 23z'/%3E%3Cpath fill='%23348dd3' d='M419.1 440.6c-16.9-14.5-41.8-21.5-61.7-9.5c-18.3 11.1-1 100.1 32.2 93.5c23.8-4.7 45.3-22.4 48.1-44.3C439.6 466.1 431.5 451.3 419.1 440.6z'/%3E%3Cpath fill='%232e8fdb' d='M127 227c-12-4.3-25.4-2.1-38.7 11.4C71 255.9 61.4 286.1 80.4 306c21.3 22.3 86.9 27.5 89.6-14.9c0.5-8.9-2.7-17.9-6.5-25.8C155.1 248.3 142.1 232.5 127 227z'/%3E%3Cpath fill='%232891e2' d='M281.5 407.6c-0.3-0.4-0.7-0.7-1-1c-19.3-17.6-59.1-0.6-78.1 10.3c-23.8 13.7-8.2 41.1 5.4 55.8c16.3 17.6 42.7 25.2 68 5.8C291.3 466.6 295.5 422.7 281.5 407.6z'/%3E%3Cpath fill='%232392ea' d='M137.9 110.2c-10.4-25.7-43.3-32.1-67-23.6C60.1 90.4 50 97.8 45.1 108.6c-21.2 47.3 44.9 81.1 78.5 51c9.5-8.5 17.3-18.9 17.4-32.4C141 120.8 139.9 115.1 137.9 110.2z'/%3E%3Cpath fill='%231d94f1' d='M344.3 284.7c-10 14.9-9.2 34.1-0.9 49.5c3.4 6.3 8.6 13.8 16.1 15.8c7.1 1.9 15.1 0.7 22.1-0.6c15.7-3 45.6-10.5 52.3-26.8C453.5 274.4 375.6 237.9 344.3 284.7z'/%3E%3Cg fill='%231795f8' %3E%3Cpath d='M-29.2 431.8c23.4 12.4 54.1 1.7 66.1-20.6c9.6-17.8 10.4-40.4-3.3-56.5c-10.5-12.4-44.2-25.8-58.5-11.3c-3 3.1-5.1 7.1-6.9 10.9C-41.1 373.2-55 418.1-29.2 431.8z'/%3E%3Cpath d='M870.8 431.8c23.4 12.4 54.1 1.7 66.1-20.6c9.6-17.8 10.4-40.4-3.3-56.5c-10.5-12.4-44.2-25.8-58.5-11.3c-3 3.1-5.1 7.1-6.9 10.9C858.9 373.2 845 418.1 870.8 431.8z'/%3E%3C/g%3E%3Cpath fill='%231297FF' d='M671.4 460.5c-10.7 1.7-20.2 8.3-26.2 22.2c-21.5 49.5 45.4 84.9 79.4 53.3c16.3-15.2 24-31 6.5-48.1c-5.9-5.8-12.3-11-19.1-15.6C699.5 463.7 684.5 458.4 671.4 460.5z'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  height: 85vh;

  .photo-section > img{
    justify-content: center;
    align-items: center;
    min-width: 55%;
    max-height: 80%;
    border-radius: 50%;
  }
  .save-button{
    background: none;
    border: none;
    font-size: 25px;
  }
  .photo-section{
    min-width: 40vw;
    height: 40vh;
    display: inline-block;
    margin 3% auto;
  }
  .button{
    background-color: rgb(65, 194, 255);
    padding: 5px;
    border-radius: 10px;
    color: white;
    width: 90px;
    border: none;
    box-shadow: 2px 4px 4px -1px rgba(0,0,0,0.75);
    cursor: pointer;
  }
  .button:hover{
    background-color: green;
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
    width: 100%;
    margin: 0 auto;
    height: 210px;
  }
  .userInformation > h1{
    line-height: 2;
  }
  span{
    color: rgb(65, 194, 255);
    border-bottom: solid 2px rgb(65, 194, 255);
  }
`;

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      name: '',
      age: 0,
      timeStamp: '',
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
  const [userInformation, setUserInformation] = useState('' || []);

  const handleClose = () => {
    setShow(false);
  };
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
      timeStamp: new Date(),
    });
  };

  function handleClick() {
    upload(photo, currentUser, setLoading); // to upload the photo to the database
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCollection = collection(database, `info${currentUser?.email}`);
    const userSnapshot = await getDocs(userCollection);
    const userInfo = userSnapshot.docs[0].id;
    const infoRef = doc(database, `info${currentUser?.email}`, userInfo);
    await updateDoc(infoRef, {
      name: informationData.name,
      age: informationData.age,
    });
    setTimeout(() => window.location = '/profile', 600);
  };

  const getData = async () => {
    const informationCollection = collection(database, `info${currentUser?.email}`); // go into the collection
    const informationSnapshot = await getDocs(informationCollection); // get the information from the collection by doing a snapshot
    const informationInputs = informationSnapshot.docs.map((document) => ( // map through all of the documents in the collection
      { ...document.data(), id: document.id, // get the document data, and its ID.
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
          </Modal>
        </div>
        <section className="photo-section">
          <img src={photoURL || DefaultProfile} alt="profile" />
          <input type="file" onChange={handleChange} />
          <button type="button" className={photo ? 'button' : null} disabled={loading || !photo} onClick={handleClick}>Upload</button>
        </section>
        <div className="userInformation">
          <h1> Hi, My name is <span>{userInformation[0]?.name}</span> .</h1>
          <h1> I am <span>{userInformation[0]?.age} </span>years old .</h1>
          <h1>My Email is <span>{currentUser?.email}</span> .</h1>
        </div>
      </ProfileDiv>
    </div>
  );
}
