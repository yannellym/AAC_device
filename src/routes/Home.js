import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import { collection, getDocs } from 'firebase/firestore';
import InputBar from '../components/InputBar';
import Picture from '../components/Picture';
// import angry from '../assets/images/angry.png';
import NavBar from '../components/Navbar';
import { useAuth, database } from './firebaseConfig';

// const PictureList = [
//   {
//     id: 1,
//     url: angry,
//     textSpeech: 'angry',
//     inBar: false,
//   },
//   {
//     id: 2,
//     url: angry,
//     textSpeech: 'angry',
//     inBar: false,
//   },
//   {
//     id: 3,
//     url: angry,
//     textSpeech: 'angry',
//     inBar: false,
//   },
//   {
//     id: 4,
//     url: angry,
//     textSpeech: 'angry',
//     inBar: false,
//   },
//   {
//     id: 5,
//     url: angry,
//     textSpeech: 'angry',
//     inBar: false,
//   },
//   {
//     id: 6,
//     url: angry,
//     textSpeech: 'angry',
//     inBar: false,
//   },
//   {
//     id: 7,
//     url: angry,
//     textSpeech: 'angry',
//     inBar: false,
//   },
//   {
//     id: 8,
//     url: angry,
//     textSpeech: 'angry',
//     inBar: false,
//   },
//   {
//     id: 9,
//     url: angry,
//     textSpeech: 'angry',
//     inBar: false,
//   },
//   {
//     id: 10,
//     url: angry,
//     textSpeech: 'angry',
//     inBar: false,
//   },
// ];

const Grid = styled.div`
  .container {
    border: 1px solid red;
    display: inline-grid;
    grid-template-columns: repeat(6, 1fr); //try auto-fill 
    grid-template-rows: repeat(3, 130px);
    gap: 30px;
  }
  
  img {
    width: 142px;
    height: 129px;
    border: 1px solid red;
    border-radius: 5px;
  }
  
`;
function Home() {
  const currentUser = useAuth();
  const [details, setDetails] = useState([]);

  // console.log(details.map((item) => item.imgUrl.slice(12)));
  const getData = async () => {
    const cardsCollection = collection(database, currentUser?.email);
    const cardsSnapshot = await getDocs(cardsCollection);
    const cardsList = cardsSnapshot.docs.map((doc) => (
      { ...doc.data(), id: doc.id,
      }));
    setDetails(cardsList);
  };

  useEffect(() => {
    getData();
  }, [currentUser]);
  // console.log(details);
  return (
    <div>
      <NavBar />
      <DndProvider backend={HTML5Backend}>
        <InputBar data={details} />
        <Grid>
          <div className="container">
            {details.map((pictureObj) => (
              <Picture
                key={pictureObj.id}
                picURL={`https://firebasestorage.googleapis.com/v0/b/polly-speech.appspot.com/o/${currentUser.email}%2F${pictureObj.imgUrl.slice(12)}?alt=media`}
                id={pictureObj.id}
                label={pictureObj.label}
                picInBar={pictureObj.inBar}
              />
            ))}
          </div>
        </Grid>
      </DndProvider>
    </div>
  );
}

export default Home;
