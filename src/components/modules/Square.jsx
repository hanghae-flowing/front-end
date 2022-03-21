import React, { useState } from 'react';
import styled from 'styled-components';

const Square = props => {
  const [onPress, setOnPress] = useState(false);
  const [transX, setTransX] = useState(props.x_val);
  const [transY, setTransY] = useState(props.y_val);

  const onMouseDown = () => {
    // console.log('mouseDown');
    setOnPress(true);
    // console.log(e.target);
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
      const currentX = mouseX - pos.width / 2 - 300;
      const currentY = mouseY - pos.height / 2 - 84;
      // console.log(posX, posY);
      // console.log(mouseX, mouseY);
      setTransX(currentX);
      setTransY(currentY);
    }
  };

  const onMouseUp = () => {
    // console.log('mouseUp');
    setOnPress(false);
  };

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={{
        transform: `translate(${transX}px,${transY}px)`,
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <StyledDiv
        width={props.width}
        height={props.height}
        radius={props.radius}
        color={props.color}
        fontColor={props.fontColor}
      >
        <Textarea fontSize={props.fontSize} defaultValue={props.text} />
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
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 5px;
  background: none;
  border: none;
  resize: none;
  overflow: auto;
  text-align: center;
  font-size: ${props => props.fontSize};
`;

Square.defaultProps = {
  width: '150px',
  height: '80px',
  radius: '0px',
  color: 'skyblue',
  fontSize: '16px',
  fontColor: '#222222',
};

export default Square;
