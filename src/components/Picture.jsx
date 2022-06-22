/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: inline;
  :hover {
    border: 1px solid black;
  }
  p {
    text-align: center;
  }
  img {
    height: 100%;
  }
`;

function Picture({ id, picURL, label }) {
  return (
    <ImageContainer>
      <img
        src={picURL}
        id={id}
        alt="card pic"
        width="150px"
        onMouseOver={(e) => console.log(e.target.id)}
        onFocus={() => console.log('focused')}
      />
      {label && <p>{label}</p>}
    </ImageContainer>
  );
}

export default Picture;
