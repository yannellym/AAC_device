import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  width: 90%;
  height: 8rem;
  margin: 5% auto;
  border: 1px solid black;
  display: flex;
  div{
    width: 80%;
    border: red solid;
  }
  section{
    display: flex;
    flex-direction: row-reverse;
    width: 10%;
    border: red solid;
  }
  .deleteDiv{
    
  }
  .checkDiv{
    background-color: black;
  }
`;

function InputBar() {
  return (
    <Bar>
      <div>Input bar</div>
      <section className="deleteDiv">DELETE</section>
      <section className="checkDiv">CHECK</section>
    </Bar>
  );
}

export default InputBar;
