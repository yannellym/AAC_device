/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: inline;
  margin: 1% auto;
  padding: 6px;
  border-radius: 10px;
  box-shadow: 2px 5px 10px -1px rgba(0,0,0,0.75);
  min-width: 115px;
  :hover {
    border: 1px solid rgb(65, 194, 255);
  }
  p {
    text-align: center;
  }
  img {
    height: 70px;
    max-width: 70px;
    margin: 0 20%;
  }
`;

function Picture({ id, picURL, label, adjust }) {
  return (
    <ImageContainer className={adjust ? 'adjust-img' : ''}>
      <img
        src={picURL}
        id={id}
        alt="card pic"
        width="120px"
      />
      {label && <p>{label}</p>}
    </ImageContainer>
  );
}

export default Picture;
