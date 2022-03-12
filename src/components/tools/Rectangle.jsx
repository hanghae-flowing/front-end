import React from 'react';
import styled from 'styled-components';

const Rectangle = props => {
  let posX = 0;
  let posY = 0;

  const dragStartHandler = e => {
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);

    posX = e.clientX;
    posY = e.clientY;
  };

  const dragHandler = e => {
    e.target.style.left = `${e.target.offsetLeft + e.clientX - posX}px`;
    e.target.style.top = `${e.target.offsetTop + e.clientY - posY}px`;
    posX = e.clientX;
    posY = e.clientY;
    console.log(posX, posY);
  };

  const dragEndHandler = e => {
    e.target.style.left = `${e.target.offsetLeft + e.clientX - posX}px`;
    e.target.style.top = `${e.target.offsetTop + e.clientY - posY}px`;
  };

  return (
    <Rect
      draggable
      onDragStart={dragStartHandler}
      onDrag={dragHandler}
      onDragEnd={dragEndHandler}
    ></Rect>
  );
};

const Rect = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #999;
  background-color: #eee;
`;

export default Rectangle;
