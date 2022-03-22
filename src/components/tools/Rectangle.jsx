import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import addNode, { postNode } from '../../redux/slice/nodeSlice';

const Rectangle = props => {
  const dispatch = useDispatch();
  const node = {
    width: '100px',
    height: '50px',
    radius: '10px',
    color: '#e3e3e3',
    fontColor: '#222222',
    fontSize: '16px',
    text: '테스트1',
    xval: '500',
    yval: '300',
    projectId: '',
  };

  const onCreate = () => {
    dispatch(addNode(node));
  };

  let posX = 0;
  let posY = 0;

  const dragStartHandler = e => {
    // const img = new Image();
    // e.dataTransfer.setDragImage(img, 0, 0);

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
      // draggable
      // onDragStart={dragStartHandler}
      // onDrag={dragHandler}
      // onDragEnd={dragEndHandler}
      onClick={() => {
        dispatch(addNode(node));
      }}
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
