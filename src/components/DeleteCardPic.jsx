/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

const deleteOptions = {
  group: {
    name: 'pictures',
    pull: 'clone',
    put: true,
  },
};

function DeleteCardPic() {
  const [deleteCardPics, setDeleteleCardPics] = useState([]);
  console.log(deleteCardPics);

  return (
    <ReactSortable
      className="deleteContainer"
      list={deleteCardPics}
      setList={setDeleteleCardPics}
      {...deleteOptions}
    >
      <img src="https://img.icons8.com/glyph-neue/48/undefined/trash.png" alt="trash icon" />
    </ReactSortable>
  );
}

export default DeleteCardPic;
