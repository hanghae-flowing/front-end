import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addNode, postNode } from '../../redux/slice/nodeSlice';

const Node = props => {
  const dispatch = useDispatch();

  const node = {
    width: '120px',
    height: '60px',
    radius: '80px',
    color: '#e3e3e3',
    fontColor: '#222222',
    fontSize: '16px',
    text: 'node',
    xval: '400',
    yval: '400',
    nodeTableId: `${props.nodeTableId}`,
    isChecked: '0',
  };

  const onCreate = () => {
    dispatch(postNode(node)).then(res => {
      console.log(res);
      dispatch(addNode(res.payload));
    });
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
    console.log(e.target.style.left, e.target.style.top);
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
      onClick={onCreate}
    ></Rect>
  );
};

const Rect = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #999;
  background-color: #eee;
`;

export default Node;
