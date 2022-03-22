import React from 'react';
import styled from 'styled-components';

const Triangle = props => {
  let posX = 0;
  let posY = 0;

  const dragStartHandler = e => {
    const img = new Image('');
    e.dataTransfer.setDragImage(img, 0, 0);

    posX = e.clientX;
    posY = e.clientY;
  };

  const dragHandler = e => {
    e.target.style.left = `${e.target.offsetLeft + e.clientX - posX}px`;
    e.target.style.top = `${e.target.offsetTop + e.clientY - posY}px`;
    posX = e.clientX;
    posY = e.clientY;
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
  width: 0px;
  height: 0px;
  border-bottom: calc(24px * 1.732) solid #666666;
  border-left: 24px solid transparent;
  border-right: 24px solid transparent;
`;

export default Triangle;
