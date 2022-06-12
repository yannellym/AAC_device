import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { ITEM_TYPES } from '../utils/types';

const ImageContainer = styled.div`
  display: inline;
  :hover {
    border: 1px solid black;
  }
  
`;

function Picture({ id, picURL, picInBar }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPES.IMAGE,
    item: {
      picId: id,
      inBar: picInBar,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      canDrag: monitor.canDrag(),
    }),
  }));

  return (
    <ImageContainer>
      <img
        ref={drag}
        src={picURL}
        alt="cute pic"
        width="150px"
        style={{ border: isDragging ? '5px solid pink' : '0px' }}
      />
    </ImageContainer>
  );
}

export default Picture;