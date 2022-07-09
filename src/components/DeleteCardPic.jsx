/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { doc, deleteDoc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';
import { useAuth, database } from '../routes/firebaseConfig';

// const navigate = useNavigate();

const deleteOptions = {
  group: {
    name: 'pictures',
    pull: 'clone',
    put: true,
  },
};

function DeleteCardPic() {
  const currentUser = useAuth();
  const [deleteCardPics, setDeleteCardPics] = useState([]);

  const deleteSingleCard = () => {
    if (deleteCardPics.length) {
      deleteDoc(doc(database, `${currentUser?.email}`, deleteCardPics[0]?.id));
      // accesses the database and obtains the database for the current user (if there is one).
      // Then, takes the first item's id in the deleteCardPics array, goes to the database,
      // and then deletes the document that matches that ID.
      // alert('card deleted');
      // eslint-disable-next-line no-return-assign
      setTimeout(() => window.location = '/home', 800);
    } else {
      console.log('no cards to delete');
    }
  };

  useEffect(() => {
    deleteSingleCard();
  }, [deleteCardPics]); // runs every time the deleteCardPics is set with a new photo object.

  return (
    <ReactSortable
      className="deleteContainer"
      list={deleteCardPics}
      setList={setDeleteCardPics}
      {...deleteOptions}
    >
      <img src="https://img.icons8.com/glyph-neue/48/undefined/trash.png" alt="trash icon" />
    </ReactSortable>
  );
}

export default DeleteCardPic;
