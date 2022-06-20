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

function Picture({ picURL, label }) {
  return (
    <ImageContainer>
      <img
        src={picURL}
        alt="card pic"
        width="150px"
      />
      {label && <p>{label}</p>}
    </ImageContainer>
  );
}

export default Picture;
