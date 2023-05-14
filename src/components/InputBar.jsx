/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import '../styles/InputBar.css';
import { ReactSortable } from 'react-sortablejs';
import Picture from './Picture';

// Settings that are passed to the input bar for the SortableJS library
const barOptions = {
  group: {
    name: 'pictures',
    pull: 'clone',
    put: true,
  },
};

function InputBar({ curUser }) {
  const [inputBar, setInputBar] = useState([]);

  // Delete the last picture card that is in the input bar
  function removePicture() {
    if (inputBar.length) {
      setInputBar((prevState) => [...prevState.slice(0, prevState.length - 1)]);
    }
  }

  // Obtain the labels of the cards in the input bar and concatinate the sentence for the text-to-speech
  function getLabelForSpeech() {
    let sentence = '';
    for (let i = 0; i < inputBar.length; i += 1) {
      sentence += `${inputBar[i].label}, `;
    }
    return sentence;
  }

  // Call the text-to-speech action
  function synthesizeToSpeaker(e) {
    e.preventDefault();
    if (inputBar.length) {
      const utterance = new SpeechSynthesisUtterance(getLabelForSpeech());
      speechSynthesis.speak(utterance);
    }
  }

  navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
      if (stream.getAudioTracks().length > 0) {
        // code for when none of the devices are available
      } else {
        // code for when both devices are available
        console.log('available');
      }
    })
    .catch((error) => {
      // code for when there is an error
      console.log(error);
    });

  return (
    <div className="bar">
      <ReactSortable
        className="input-bar"
        list={inputBar}
        setList={(e) => inputBar.length <= 4 && setInputBar(e)}
        {...barOptions}
      >
        {inputBar.map((picture) => (
          <Picture
            key={picture.id}
            picURL={`https://firebasestorage.googleapis.com/v0/b/polly-speech.appspot.com/o/${curUser.email}%2F${picture.imgUrl.slice(12)}?alt=media`}
          />
        ))}
      </ReactSortable>
      <section className="deleteDiv" onClick={removePicture}>
        <button type="button">
          <img src="https://img.icons8.com/external-basicons-solid-edtgraphics/150/undefined/external-delete-ui-elements-basicons-solid-edtgraphics-2.png" className="bar-btn deleteBtn" alt="delete button" />
        </button>
      </section>
      <button type="button" className="checkDiv" onClick={synthesizeToSpeaker}>
        <img src="https://img.icons8.com/material-rounded/96/000000/speaker.png" className="bar-btn checkBtn" alt="speaker button" />
      </button>
    </div>
  );
}

export default InputBar;
