import React from 'react';
import styled from 'styled-components';

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
    height: 80%;
    margin-top: 13%;
  }
`;

function InputBar() {
  return (
    <Bar>
      <div>Input bar</div>
      <section className="deleteDiv">
        <img src="https://img.icons8.com/external-basicons-solid-edtgraphics/150/undefined/external-delete-ui-elements-basicons-solid-edtgraphics-2.png" className="deleteBtn" alt="delete button" />
      </section>
      <section className="checkDiv">
        <img src="https://img.icons8.com/color/150/undefined/checked--v1.png" className="checkBtn" alt="check button" />
      </section>
    </Bar>
  );
}

export default InputBar;
