import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  editNode,
  deleteAction,
  deleteNode,
} from '../../redux/slice/nodeSlice';

const Square = props => {
  const [onPress, setOnPress] = useState(false);
  const [transX, setTransX] = useState(props.xval);
  const [transY, setTransY] = useState(props.yval);
  const [text, setText] = useState(props.text);
  const [visible, setVisible] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();
  const onTextChange = e => {
    setText(e.target.value);
  };

  const updateNode = () => {
    const updateData = {
      width: '120px',
      height: '60px',
      radius: '80px',
      color: '#e3e3e3',
      fontColor: '#222222',
      fontSize: '16px',
      text: text,
      xval: `${transX}`,
      yval: `${transY}`,
      projectId: props.projectId,
      nodeId: props.nodeId,
    };
    const nodeId = props.nodeId;
    dispatch(editNode({ updateData, nodeId }));
  };

  const onMouseDown = () => {
    setOnPress(true);
  };

  const onMouseMove = e => {
    // console.log('mouseMove');
    // console.log(onPress);
    e.preventDefault();
    if (onPress === true) {
      const pos = e.target.getBoundingClientRect();
      let posX = pos.x;
      let posY = pos.y;
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      const shiftX = mouseX - posX;
      const shiftY = mouseY - posY;
      const currentX = mouseX - pos.width / 2;
      const currentY = mouseY - pos.height / 2;
      // console.log(posX, posY);
      // console.log(mouseX, mouseY);
      setTransX(currentX);
      setTransY(currentY);
    }
  };

  const onMouseUp = () => {
    setOnPress(false);
  };

  return (
    <div
      // contentEditable={true}
      // suppressContentEditableWarning={true}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseOver={() => {
        setVisible(true);
      }}
      onMouseOut={() => {
        setVisible(false);
      }}
      onFocus={() => {
        setIsFocus(true);
      }}
      onBlur={() => {
        setIsFocus(false);
        updateNode();
      }}
      style={{
        transform: `translate(${transX}px,${transY}px)`,
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Delete
        visible={visible}
        onClick={() => {
          dispatch(deleteNode(props.nodeId)).then(() => {
            dispatch(deleteAction(props.nodeId));
          });
        }}
      >
        <span
          style={{
            width: '10px',
            height: '2px',
            backgroundColor: '#222',
            display: 'block',
            position: 'absolute',
            top: '10px',
            left: '6px',
            transform: 'rotate(45deg)',
          }}
        ></span>
        <span
          style={{
            width: '10px',
            height: '2px',
            backgroundColor: '#222',
            display: 'block',
            position: 'absolute',
            top: '10px',
            left: '6px',
            transform: 'rotate(135deg)',
          }}
        ></span>
      </Delete>
      <StyledDiv
        width={props.width}
        height={props.height}
        radius={props.radius}
        color={props.color}
        fontColor={props.fontColor}
        focus={isFocus}
        zIndex={onPress}
      >
        <Textarea
          type="text"
          fontSize={props.fontSize}
          onChange={onTextChange}
          defaultValue={props.text}
        />
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.radius};
  background-color: ${props => props.color};
  color: ${props => props.fontColor};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border: ${props => (props.focus ? '2px solid #999' : 'none')};
  z-index: ${props => (props.zIndex ? '10' : '3')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Textarea = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px;
  background: none;
  border: none;
  resize: none;
  overflow: auto;
  text-align: center;
  font-size: ${props => props.fontSize};

  &:focus {
    outline: none;
  }
`;

const Delete = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 22px;
  height: 22px;
  border-radius: 50px;
  background-color: #e3e3e3;
  position: absolute;
  top: -6px;
  right: -6px;
  cursor: pointer;
`;

Square.defaultProps = {
  width: '120px',
  height: '60px',
  radius: '80px',
  color: '#f2f2f2',
  fontSize: '16px',
  fontColor: '#222222',
};

export default Square;
