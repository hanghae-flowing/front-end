import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
=======
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { URL } from '../../API';
>>>>>>> f16faa732d3ed2273f0860fd7c67d38422b5d213
import {
  editNode,
  deleteNode,
  postNode,
  addPath,
} from '../../redux/slice/nodeSlice';

const Square = props => {
  const [onPress, setOnPress] = useState(false);
  const [transX, setTransX] = useState(props.xval);
  const [transY, setTransY] = useState(props.yval);
  const [text, setText] = useState(props.text);
  const [visible, setVisible] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isCheck, setIsCheck] = useState(props.isChecked);
  const dispatch = useDispatch();
  const onTextChange = e => {
    setText(e.target.value);
  };

  useEffect(() => {
    setTransX(props.xval);
    setTransY(props.yval);
    setText(props.text);
    setIsCheck(props.isChecked);
  }, [props.xval, props.yval, props.text, props.isChecked]);

  const nodeTableId = props.nodeTableId;
  const nodeId = props.nodeId;

  const updateNode = () => {
    const updateData = {
      width: '120px',
      height: '60px',
      radius: '80px',
      color: '#e3e3e3',
      fontColor: '#6c6c6c',
      fontSize: '16px',
      text: text,
      xval: `${transX}`,
      yval: `${transY}`,
      nodeTableId: nodeTableId,
    };
    const nodeId = props.nodeId;
    dispatch(editNode({ updateData, nodeId }));
  };

  const pinNode = useMutation(data => {
    URL.post(`/node/pin`, data);
  });

  const sendingData = {
    nodeTableId: nodeTableId,
    nodeId: nodeId,
  };

  const onPin = () => {
    pinNode.mutate(sendingData);
  };

  const node = {
    width: '120px',
    height: '60px',
    radius: '80px',
    color: '#e3e3e3',
    fontColor: '#6c6c6c',
    fontSize: '16px',
    text: '키워드',
    xval: `${transX + 20}`,
    yval: `${transY + 20}`,
    nodeTableId: `${props.nodeTableId}`,
    isChecked: '0',
  };

  const onCreate = () => {
    dispatch(postNode(node)).then(res => {
      // dispatch(addNode(res.payload));
      const data = {
        nodeTableId: nodeTableId,
        parentNode: nodeId,
        childNode: res.payload.nodeId,
      };
      dispatch(addPath(data));
    });
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
      // let posX = pos.x;
      // let posY = pos.y;
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      // const shiftX = mouseX - posX;
      // const shiftY = mouseY - posY;
      const currentX = mouseX - pos.width / 2 + 60;
      const currentY = mouseY - pos.height / 2 + 30;
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
        top: '-30px',
        left: '-60px',
      }}
    >
      <Delete
        visible={visible}
        onClick={() => {
          dispatch(deleteNode(props.nodeId));
        }}
      >
        <Line rotate="45deg" />
        <Line rotate="135deg" />
      </Delete>
      <Create visible={visible} onClick={onCreate}>
        <Line rotate="0" />
        <Line rotate="90deg" />
      </Create>
      <Pin visible={visible} onClick={onPin}>
        Pin
      </Pin>
      <StyledDiv
        width={props.width}
        height={props.height}
        radius={props.radius}
        color={isCheck}
        focus={isFocus}
        zIndex={onPress}
      >
        <Textarea
          type="text"
          fontColor={props.fontColor}
          fontSize={props.fontSize}
          onChange={onTextChange}
          value={text}
        />
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.radius};
  background-color: ${props => (props.color === 1 ? '#E3E0FF' : '#f2f2f2')};
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
  color: ${props => props.fontColor};

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

const Create = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 22px;
  height: 22px;
  border-radius: 50px;
  background-color: #e3e3e3;
  position: absolute;
  top: -6px;
  right: 20px;
  cursor: pointer;
`;

const Pin = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 22px;
  border-radius: 50px;
  background-color: #e3e3e3;
  font-size: 13px;
  color: #6c6c6c;
  position: absolute;
  top: -6px;
  left: -6px;
  cursor: pointer;
`;

const Line = styled.span`
  width: 10px;
  height: 2px;
  background-color: #222;
  display: block;
  position: absolute;
  top: 10px;
  left: 6px;
  transform: rotate(${props => props.rotate});
`;

Square.defaultProps = {
  width: '120px',
  height: '60px',
  radius: '80px',
  color: '#f2f2f2',
  fontSize: '16px',
  fontColor: '#6c6c6c',
};

export default Square;
