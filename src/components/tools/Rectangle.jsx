import React from 'react';
import styled from 'styled-components';

const Rectangle = props => {
  return <Rect draggable></Rect>;
};

const Rect = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #999;
  background-color: #eee;
`;

export default Rectangle;
