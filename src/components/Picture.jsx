import React from 'react';
import { useDrag } from 'react-dnd';
import { ITEM_TYPES } from '../utils/types';

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
    <img
      ref={drag}
      src={picURL}
      alt="cute pic"
      width="150px"
      style={{ border: isDragging ? '5px solid pink' : '0px' }}
    />
  );
}

export default Picture;
