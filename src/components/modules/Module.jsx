import React from 'react';
import styled from 'styled-components';

const Module = () => {
  return <div></div>;
};

export const RectangleBox = props => {
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
    <React.Fragment>
      <RectStyledBox
        width={props.width}
        height={props.height}
        draggable="true"
        onDragStart={dragStartHandler}
        onDrag={dragHandler}
        onDragEnd={dragEndHandler}
      >
        {props.children}
      </RectStyledBox>
    </React.Fragment>
  );
};

const RectStyledBox = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  border: 1px solid #222;
  background-color: #fff;
  position: absolute;
`;

export default Module;
