import React, { useRef, useState } from 'react';

const Vstyle = {
  width: '200%',
  height: '200%',
  backgroundImage:
    'url("https://images.unsplash.com/photo-1647185256036-ea35af4ade52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
  backgroundSize: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
  transformOrigin: 'left top',
};

const Viewport = props => {
  const elRef = useRef(null);
  const [press, setPress] = useState(false);
  const [transX, setTransX] = useState(0);
  const [transY, setTransY] = useState(0);
  const [scale, setScale] = useState(1);

  const onWheelHandler = e => {
    setScale(scale => (scale >= 0.2 ? scale + 0.001 * e.deltaY : 0.2));
  };

  const onMouseDown = e => {
    setPress(true);
  };

  const onMouseMove = e => {
    if (press === true) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      console.log(mouseX, mouseY);
      const el = e.target.getBoundingClientRect();
      console.log(el);
      const posX = e.target.offsetLeft;
      const posY = e.target.offsetTop;
      const shiftX = e.clientX - el.x;
      const shiftY = e.clientY - el.y;
      const currentX = mouseX - shiftX - posX;
      const currentY = mouseY - shiftY - posY;
      setTransX(currentX);
      setTransY(currentY);
    }
  };

  const onMouseUp = e => {
    setPress(false);
  };

  return (
    <div
      ref={elRef}
      style={{
        ...Vstyle,
        transform: `translate(${transX}px, ${transY}px) scale(${scale})`,
        zIndex: 1,
      }}
      onWheel={onWheelHandler}
      onMouseDown={onMouseDown}
      // onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      {props.children}
    </div>
  );
};

export default Viewport;
