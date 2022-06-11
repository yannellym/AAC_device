import React from 'react';
import styled from 'styled-components';
import Picture from './Picture';

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

function Gallery({ data }) {
  return (
    <Grid>
      <div className="container">
        {data.map((picture) => <Picture key={picture.id} picURL={picture.url} id={picture.id} picInBar={picture.inBar} />)}
      </div>
    </Grid>
  );
}

export default Gallery;
