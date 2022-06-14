import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import InputBar from '../components/InputBar';
import Picture from '../components/Picture';
import angry from '../assets/images/angry.png';
import NavBar from '../components/Navbar';

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
  return (
    <div>
      <NavBar />
      <DndProvider backend={HTML5Backend}>
        <InputBar data={PictureList} />
        <Grid>
          <div className="container">
            {PictureList.map((picture) => <Picture key={picture.id} picURL={picture.url} id={picture.id} picInBar={picture.inBar} />)}
          </div>
        </Grid>
      </DndProvider>
    </div>
  );
}

export default Home;
