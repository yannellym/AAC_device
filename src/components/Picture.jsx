/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: inline;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 2px 5px 10px -1px rgba(0,0,0,0.75);
  padding: 5%;

  :hover {
    border: 1px solid black;
  }
  p {
    text-align: center;
  }
  img {
    height: 80%;
  }
`;

function Picture({ id, picURL, label }) {
  return (
    <ImageContainer>
      <img
        src={picURL}
        id={id}
        alt="card pic"
        width="120px"
        onMouseOver={(e) => console.log(e.target.id)}
        onFocus={() => console.log('focused')}
      />
      {label && <p>{label}</p>}
    </ImageContainer>
  );
}

export default Picture;
