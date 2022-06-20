import React, { useState, useEffect } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { collection, getDocs } from 'firebase/firestore';
import InputBar from '../components/InputBar';
import NavBar from '../components/Navbar';
import { useAuth, database } from './firebaseConfig';
import Picture from '../components/Picture';
import '../styles/Home.css';

const gridOptions = {
  group: {
    name: 'pictures',
    pull: 'clone',
    put: false,
  },
  sort: false,
};
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

  return (
    <div>
      <NavBar />
      <InputBar curUser={currentUser} />
      <ReactSortable
        className="container"
        list={details}
        setList={setDetails}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...gridOptions}
      >
        {details.map((pictureObj) => (
          <Picture
            key={pictureObj.id}
            picURL={`https://firebasestorage.googleapis.com/v0/b/polly-speech.appspot.com/o/${currentUser.email}%2F${pictureObj.imgUrl.slice(12)}?alt=media`}
            label={pictureObj.label}
          />
        ))}
      </ReactSortable>
    </div>
  );
}

export default Home;
