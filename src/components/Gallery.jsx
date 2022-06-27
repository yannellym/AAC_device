/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ReactSortable } from 'react-sortablejs';
import Picture from './Picture';

// Settings that are passed to the grid container for the SortableJS library
const gridOptions = {
  group: {
    name: 'pictures',
    pull: 'clone',
    put: false,
  },
  sort: false,
};

function Gallery({ details, setDetails, curUser }) {
  return (
    <ReactSortable
      className="container"
      list={details}
      setList={setDetails}
      {...gridOptions}
    >
      {details.map((pictureObj) => (
        <Picture
          key={pictureObj.id}
          id={pictureObj.id}
          picURL={`https://firebasestorage.googleapis.com/v0/b/polly-speech.appspot.com/o/${curUser.email}%2F${pictureObj.imgUrl.slice(12)}?alt=media`}
          label={pictureObj.label}
          // Fix height of picture cards in Gallery if there's less than 3
          adjust={details.length < 3}
        />
      ))}
    </ReactSortable>
  );
}

export default Gallery;
