import React, { useState } from 'react';
import '../styles/InputBar.css';
import { ReactSortable } from 'react-sortablejs';
import Picture from './Picture';

const barOptions = {
  group: {
    name: 'pictures',
    pull: 'clone',
    put: true,
  },
};

function InputBar({ curUser }) {
  const [inputBar, setInputBar] = useState([]);
  console.log(inputBar);
  return (
    <div className="bar">
      <ReactSortable
        className="input-bar"
        list={inputBar}
        setList={(e) => inputBar.length <= 5 && setInputBar(e)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...barOptions}
      >
        {inputBar.map((picture) => (
          <Picture
            key={picture.id}
            picURL={`https://firebasestorage.googleapis.com/v0/b/polly-speech.appspot.com/o/${curUser.email}%2F${picture.imgUrl.slice(12)}?alt=media`}
          />
        ))}
      </ReactSortable>
      <section className="deleteDiv">
        <button type="button">
          <img src="https://img.icons8.com/external-basicons-solid-edtgraphics/150/undefined/external-delete-ui-elements-basicons-solid-edtgraphics-2.png" className="bar-btn deleteBtn" alt="delete button" />
        </button>
      </section>
      <section className="checkDiv">
        <button type="button">
          <img src="https://img.icons8.com/material-rounded/96/000000/speaker.png" className="bar-btn checkBtn" alt="check button" />
        </button>
      </section>
    </div>
  );
}

export default InputBar;
