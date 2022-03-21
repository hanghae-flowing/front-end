import React from 'react';
import styled from 'styled-components';
import Rectangle from './Rectangle';

const ToolBox = props => {
  return (
    <StyledDiv>
      <Rectangle />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 500px;
  height: 80px;
  background-color: #fff;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50px;
  box-shadow: 0px 10px 30px -2px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 40px;
  z-index: 11;
`;

export default ToolBox;
