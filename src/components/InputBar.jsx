import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import Picture from './Picture';
import { ITEM_TYPES } from '../utils/types';

const Bar = styled.div`
  width: 90%;
  height: 8rem;
  margin: 5% auto;
  border: 5px solid black;
  display: flex;
  div{
    width: 80%;
  }
  section{
    display: flex;
    flex-direction: row-reverse;
    width: 10%;
  }
  .bar-btn{
    background: none;
    cursor: pointer;
  }
  .deleteDiv{
    border-right: 5px solid black;
  }
  .deleteBtn{
    width: 100%;
  }
  .checkDiv{
    background-color: black;
  }
  .checkBtn{
    width: 100%;
    margin-top: 13%;
  }
`;

function InputBar({ data }) {
  const [inputBar, setInputBar] = React.useState([]);
  console.log(data);
  function addImageToBar(id) {
    const picList = data.filter((pic) => id === pic.id);
    const curPic = picList[0];
    if (!curPic.inBar) {
      curPic.inBar = !curPic.inBar;
      setInputBar((prevState) => [...prevState, curPic]);
    }
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ITEM_TYPES.IMAGE,
    drop: (item) => {
      addImageToBar(item.picId);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  function removeImage() {
    if (inputBar.length) {
      const curImg = inputBar[inputBar.length - 1];
      curImg.inBar = !curImg.inBar;
      setInputBar((prevState) => [...prevState.slice(0, prevState.length - 1)]);
    }
  }

  function textToSpeech() {
    if (inputBar.length) {
      console.log('click');
    }
  }

  return (
    <Bar>
      <div className="inputBar" ref={drop} style={{ backgroundColor: isOver ? '#bbf' : 'rgba(0,0,0,.12' }}>
        {inputBar.map((pic) => <Picture key={pic.id} picURL={pic.url} id={pic.id} />)}
      </div>
      <section className="deleteDiv">
        <button type="button" onClick={removeImage}>
          <img src="https://img.icons8.com/external-basicons-solid-edtgraphics/150/undefined/external-delete-ui-elements-basicons-solid-edtgraphics-2.png" className="bar-btn deleteBtn" alt="delete button" />
        </button>
      </section>
      <section className="checkDiv" onClick={textToSpeech}>
        <button type="button">
          <img src="https://img.icons8.com/color/150/undefined/checked--v1.png" className="bar-btn checkBtn" alt="check button" />
        </button>
      </section>
    </Bar>
  );
}

export default InputBar;
