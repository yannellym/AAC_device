import React, { useState } from 'react';
import '../styles/InputBar.css';
import { ReactSortable } from 'react-sortablejs';
import Picture from './Picture';

const SDK = require('microsoft-cognitiveservices-speech-sdk');

const key = process.env.REACT_APP_AZURE_KEY;
const region = process.env.REACT_APP_AZURE_REGION;

// Text to speech set up
const speechConfig = SDK.SpeechConfig.fromSubscription(key, region);

// Language of the voice
speechConfig.speechSynthesisVoiceName = 'en-US-JennyNeural';

const audioConfig = SDK.AudioConfig.fromDefaultSpeakerOutput();
const synthesizer = new SDK.SpeechSynthesizer(speechConfig, audioConfig);

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

  function removePicture() {
    if (inputBar.length) {
      setInputBar((prevState) => [...prevState.slice(0, prevState.length - 1)]);
    }
  }

  function getLabelForSpeech() {
    let sentence = '';
    for (let i = 0; i < inputBar.length; i += 1) {
      sentence += `${inputBar[i].label}, `;
    }
    console.log(sentence);
    return sentence;
  }

  function synthesizeToSpeaker() {
    const outputSentence = getLabelForSpeech();
    synthesizer.speakTextAsync(
      outputSentence,
      (result) => {
        if (result) {
          console.log(result.audioData);
        }
      },
      (error) => {
        console.log(error);
      },
    );
  }

  return (
    <div className="bar">
      <ReactSortable
        className="input-bar"
        list={inputBar}
        setList={(e) => inputBar.length <= 4 && setInputBar(e)}
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
      <section className="checkDiv" onTouchStart={synthesizeToSpeaker}>
        <button type="button">
          <img src="https://img.icons8.com/material-rounded/96/000000/speaker.png" className="bar-btn checkBtn" alt="speaker button" />
        </button>
      </section>
    </div>
  );
}

export default InputBar;
