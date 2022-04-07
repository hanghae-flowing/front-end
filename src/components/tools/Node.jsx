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
    text: '',
    xval: '400',
    yval: '400',
    nodeTableId: `${props.nodeTableId}`,
    isChecked: '0',
  };

  const onCreate = () => {
    dispatch(postNode(node));
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
    // console.log(e.target.style.left, e.target.style.top);
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
      onClick={onCreate}
    >
      <Text>키워드</Text>
    </Rect>
  );
};

const Text = styled.p`
  width: 100px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #878787;
  display: none;
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
`;

const Rect = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 38px;
  border: none;
  border-radius: 50px;
  background-color: #fff;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  color: #6c6c6c;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.3) translateY(-10px);
    ${Text} {
      display: block;
    }
  }
`;

export default Node;
