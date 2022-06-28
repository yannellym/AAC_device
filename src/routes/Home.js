/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import InputBar from '../components/InputBar';
import NavBar from '../components/Navbar';
import { useAuth, database } from './firebaseConfig';
import DeleteCardPic from '../components/DeleteCardPic';
import '../styles/Home.css';
import Gallery from '../components/Gallery';

function Home() {
  const currentUser = useAuth();
  const [details, setDetails] = useState([]);

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

  return (
    <div>
      <NavBar />
      <InputBar
        curUser={currentUser}
      />
      <Gallery
        details={details}
        setDetails={setDetails}
        curUser={currentUser}
      />
      <DeleteCardPic
        curUser={currentUser}
      />
    </div>
  );
}

export default Home;
