import React, { useState } from 'react';
import '../styles/InputBar.css';
import { ReactSortable } from 'react-sortablejs';
import AWS from 'aws-sdk';
import Picture from './Picture';

const Polly = new AWS.Polly({ region: 'us-east-1' });

const params = {
  OutputFormat: 'mp3',
  Engine: 'standard',
  Text: 'Hello there',
  TextType: 'text',
  VoiceId: 'Joanna',
};

const barOptions = {
  group: {
    name: 'pictures',
    pull: 'clone',
    put: true,
  },
};

function InputBar({ curUser }) {
  const [inputBar, setInputBar] = useState([]);

  function removePicture() {
    if (inputBar.length) {
      setInputBar((prevState) => [...prevState.slice(0, prevState.length - 1)]);
    }
  }

  function textToSpeech() {
    Polly.synthesizeSpeech(params, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      if (data) {
        console.log(data);
      }
    });
  }

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
      <section className="deleteDiv" onClick={removePicture}>
        <button type="button">
          <img src="https://img.icons8.com/external-basicons-solid-edtgraphics/150/undefined/external-delete-ui-elements-basicons-solid-edtgraphics-2.png" className="bar-btn deleteBtn" alt="delete button" />
        </button>
      </section>
      <section className="checkDiv" onClick={textToSpeech}>
        <button type="button">
          <img src="https://img.icons8.com/material-rounded/96/000000/speaker.png" className="bar-btn checkBtn" alt="check button" />
        </button>
      </section>
    </div>
  );
}

export default InputBar;
