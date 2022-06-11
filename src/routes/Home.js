import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import InputBar from '../components/InputBar';
import Gallery from '../components/Gallery';
import angry from '../assets/images/angry.png';

const PictureList = [
  {
    id: 1,
    url: angry,
    textSpeech: 'angry',
    inBar: false,
  },
  {
    id: 2,
    url: angry,
    textSpeech: 'angry',
    inBar: false,
  },
  {
    id: 3,
    url: angry,
    textSpeech: 'angry',
    inBar: false,
  },
  {
    id: 4,
    url: angry,
    textSpeech: 'angry',
    inBar: false,
  },
  {
    id: 5,
    url: angry,
    textSpeech: 'angry',
    inBar: false,
  },
  {
    id: 6,
    url: angry,
    textSpeech: 'angry',
    inBar: false,
  },
  {
    id: 7,
    url: angry,
    textSpeech: 'angry',
    inBar: false,
  },
  {
    id: 8,
    url: angry,
    textSpeech: 'angry',
    inBar: false,
  },
  {
    id: 9,
    url: angry,
    textSpeech: 'angry',
    inBar: false,
  },
  {
    id: 10,
    url: angry,
    textSpeech: 'angry',
    inBar: false,
  },
];
function Home() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <InputBar data={PictureList} />
        <Gallery data={PictureList} />
      </DndProvider>
    </div>
  );
}

export default Home;
